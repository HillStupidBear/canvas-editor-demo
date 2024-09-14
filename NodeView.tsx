import React, { FC, useEffect, useState } from "react";

// import { message, Drawer } from "antd";
import { useRequest, withDynamicSchemaProps } from "@nocobase/client";

import { BlockName } from "../constants";
// import { useT } from '../locale';

import ReactECharts from "echarts-for-react";

export interface NodeViewBlockProps {
  height?: string;
}
function unique(arr) {
  const res = new Map();
  return arr.filter((a) => !res.has(a.id) && res.set(a.id, 1));
}

const RelationshipData = [
  {
      "createdAt": "2024-09-02T06:55:35.462Z",
      "updatedAt": "2024-09-03T02:39:28.997Z",
      "id": 1,
      "name": "内容拆分",
      "createdById": 38,
      "updatedById": 36
  },
  {
      "createdAt": "2024-09-02T06:55:42.669Z",
      "updatedAt": "2024-09-03T02:40:02.425Z",
      "id": 2,
      "name": "历史关系",
      "createdById": 38,
      "updatedById": 36
  },
  {
      "createdAt": "2024-09-03T02:38:58.280Z",
      "updatedAt": "2024-09-03T05:01:56.083Z",
      "id": 3,
      "name": "下级文档",
      "createdById": 36,
      "updatedById": 38
  },
  {
      "createdAt": "2024-09-03T02:39:51.575Z",
      "updatedAt": "2024-09-03T02:39:51.575Z",
      "id": 4,
      "name": "中英版本",
      "createdById": 36,
      "updatedById": 36
  },
  {
      "createdAt": "2024-09-03T02:40:20.718Z",
      "updatedAt": "2024-09-03T02:40:20.718Z",
      "id": 5,
      "name": "内容合并",
      "createdById": 36,
      "updatedById": 36
  },
  {
      "createdAt": "2024-09-03T02:40:29.675Z",
      "updatedAt": "2024-09-03T02:40:29.675Z",
      "id": 6,
      "name": "替代关系",
      "createdById": 36,
      "updatedById": 36
  },
  {
      "createdAt": "2024-09-03T02:40:37.757Z",
      "updatedAt": "2024-09-03T02:40:37.757Z",
      "id": 7,
      "name": "参考关系",
      "createdById": 36,
      "updatedById": 36
  }
]

const get_color = (relationship: string) => {
  switch (relationship) {
    case "下级文档":
      return "red";
    case "中英版本":
      return "green";
    case "历史关系":
      return "blue";
    case "内容拆分":
      return "cyan";
    case "内容合并":
      return "yellow";
    case "替代关系":
      return "gray";
    case "参考关系":
      return "purple";
    case "从属":
      return "gray";
    default:
      return "black";
  }
};

export const NodeViewBlock: FC<NodeViewBlockProps> = withDynamicSchemaProps(
  (props) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(undefined);
    const getOption = () => {
      let allDepart = [
        {
          createdAt: "2024-09-01T05:58:29.101Z",
          updatedAt: "2024-09-05T05:13:16.028Z",
          parentId: null,
          id: 1,
          title: "全行",
          isLeaf: false,
          department_id: null,
          createdById: 1,
          updatedById: 38,
          color_of_department: "#1677ff",
          parent: null
        }
      ]; // 所有部门
      let allCategories: any = []; // echart categories
      let allRelationship: any = []; // echart categories
      let allDocument: any = []; // 所有文件
      let links: any = [];
      // 取所有的部门和关系信息
      data.data.map((item) => {
        allDocument.push(item);
        if (item.relationship_source.length) {
          item.relationship_source.map((relationship) => {
            allRelationship.push(relationship);
            if (data.data.find((i) => i.id === relationship.target_document_id)) {
              links.push({
                target: data.data.find((i) => i.id === relationship.target_document_id).name,
                source: item.name,
                category: RelationshipData.find((i) => Number(i.id) === relationship.relationship_type_id)!.name,
                lineStyle: {
                  color: get_color(RelationshipData.find((i) => Number(i.id) === relationship.relationship_type_id)!.name)
                }
              });
            }
          });
        }
        if (item.relationship_target.length) {
          item.relationship_target.map((relationship) => {
            if (data.data.find((i) => i.id === relationship.source_document_id)) {
              links.push({
                target: item.name,
                source: data.data.find((i) => i.id === relationship.source_document_id).name,
                category: RelationshipData.find((i) => Number(i.id) === relationship.relationship_type_id)!.name,
                lineStyle: {
                  color: get_color(RelationshipData.find((i) => Number(i.id) === relationship.relationship_type_id)!.name)
                }
              });
            }
          });
        }

        if (item.department?.title) {
          links.push({
            target: item.name,
            source: item.department.title,
            lineStyle: {
              color: get_color("从属")
            },
            category: "从属"
          });
          allDepart.push(item.department);
        }
      });
      // 去重
      allDepart = unique(allDepart);
      allRelationship = unique(allRelationship);
      allDocument = unique(allDocument);

      allDepart.forEach((dep) => {
        dep["name"] = dep.title || "";

        dep["itemStyle"] = {
          color: dep.color_of_department || "gray"
        };
      });
      allDocument.forEach((doc) => {
        doc["category"] = doc.department?.title || "";
      });

      allCategories = allDepart;
      // allRelationship.forEach((r)=>{
      //   allCategories = [...allCategories, r.name]
      // })

      // 设置 series.data
      const seriesData = [];
      allDepart.map((item) => {
        let obj = {
          dataId: 0 - item.id,
          name: item.title,
          draggable: false,
          symbolSize: [80, 80],
          itemStyle: {
            color: item.color_of_department || "gray"
          },
          value: 1
        };
        // 公司
        if (item.id === 1) {
          obj.symbolSize = [100, 100];
          obj.value = 2;
        } else {
          links.push({
            target: obj.name,
            source: "全行",
            category: "从属",
            lineStyle: {
              color: get_color("从属")
            }
          });
        }
        seriesData.push(obj);
      });
      allDocument.map((item) => {
        // 文档
        let obj = {
          dataId: item.id, // 将数据id传入
          name: item.name,
          draggable: true,
          value: 1,
          symbolSize: [60, 60],
          itemStyle: {
            color: item.department?.color_of_department || "gray"
          }
          // category: {id:item.department?.id,title: item.department?.title }
        };
        seriesData.push(obj);
      });
      console.log(seriesData, "sericeData===========");
      console.log(allCategories, "allCategories=============");
      console.log(allDepart, "allDepart=============");
      console.log(allDocument, "allDocument=============");
      console.log(links, "links=============");

      return {
        title: {
          // text: '文档关系图',
          // textStyle: {
          //   color: 'white'
          // },
          // left: '30px',
          // top: '20px'
        },
        tooltip: {
          show: true,
          formatter: (p) => {
            console.log(p, "xxx");
            return p.data?.name;
          }
        },
        legend: {
          show: true
        },
        xAxis: {
          show: false
        },
        yAxis: {
          show: false
        },
        grid: {
          top: "80px"
        },
        calculable: false,
        series: [
          {
            type: "graph",
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [2, 8],
            roam: true,
            preventOverlap: true,
            draggable: true,
            focusNodeAdjacency: true,
            force: {
              repulsion: 100,
              edgeLength: [10, 350],
              friction: 0.8,
              layoutAnimation: true,
              gravity: 0.005
            },
            layout: "force",
            symbol: "circle",
            lineStyle: {
              curveness: 0.1,
              color: "source",
              opacity: 0.6
            },
            label: {
              normal: {
                show: true,
                position: "right",
                textStyle: {
                  fontSize: 11
                },

                formatter: (params) => {
                  return `${params.name}`;
                }
              }
              // rich: {
              //   a: {

              //     color: '#000',
              //     textBorderColor: 'white',
              //     overflow:'truncate',
              //     ellipsis: '...'
              //   }
              // },
            },

            // labelLayout: {
            //   hideOverlap: true
            // },
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  // fontSize: 14
                },
                formatter: function (param) {
                  return param.data.category;
                }
              }
            },
            data: seriesData,
            categories: allCategories,
            links: links
          }
        ]
      };
    };

    let request = undefined;

    if (process.env.NODE_ENV === "development") {
      request = {
        url: "https://kbms_aio.second-brain.tech/api/relationship:list?pageSize=20000&appends%5B%5D=source_document&appends%5B%5D=target_document&appends%5B%5D=relationship_type&filter=%7B%7D",
        method: "get",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM4LCJpYXQiOjE3MjU3MjI3MjMsImV4cCI6MTcyNjMyNzUyM30.EEs67ftl8UW4W3IqXv0-TMtOEZzEbTpHQ16VAGWUa7Q"
        }
      };
    } else {
      request = {
        url: "/relationship:list?pageSize=20000&appends%5B%5D=source_document&appends%5B%5D=target_document&appends%5B%5D=relationship_type&filter=%7B%7D",
        method: "get"
      };
    }

    const { runAsync } = useRequest(request, {
      manual: true
    });

    useEffect(() => {
      setLoading(true);
      runAsync({
        pageSize: 20000,
        appends: [
          "relationship_type",
          "target_document",
          "target_document.department",
          "target_document.department.parent(recursively=true)",
          "source_document",
          "source_document.department",
          "source_document.department.parent(recursively=true)"
        ]
      }).then((res) => {
        console.log(res, ":relationship");
        setData(res);
        setLoading(false);
      });
    }, []);

    const eventCheck = (e) => {
      console.log(e, ":click");
      if (e.data.dataId > 0) {
        window.dispatchEvent(new CustomEvent("ShowDocumentDetail", { detail: { id: e.data.dataId } }));
      }
    };

    return (
      <div style={{ padding: 0, margin: 0, height: props.height, overflow: "auto" }}>
        {loading ? (
          ""
        ) : (
          <ReactECharts
            option={getOption()}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            style={{ height: "100%" }}
            onEvents={{ click: eventCheck }}
          />
        )}
      </div>
    );
  },
  { displayName: BlockName }
);
