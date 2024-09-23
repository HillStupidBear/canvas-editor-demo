import React, { useEffect, useState } from "react";

import ReactECharts from "echarts-for-react";

const MockData = {
  "data": [
    {
      "id": 1,
      "name": "毛利兰",
      "department": {
        "parentId": 1,
        "id": 2,
        "color_of_department": "#66ccff",
        "title": "毛利侦探事务所",
      },
      "relationship_source": [
        {
          "relationship_type_id": 2,
          "id": 2,
          "source_document_id": 1,
          "target_document_id": 6,
        },
        {
          "relationship_type_id": 3,
          "id": 2,
          "source_document_id": 1,
          "target_document_id": 7,
        }
      ],
      "relationship_target": []
    },
    {
      "id": 2,
      "name": "毛利小五郎",
      "department": {
        "parentId": 1,
        "id": 2,
        "color_of_department": "#66ccff",
        "title": "毛利侦探事务所",
      },
      "relationship_source": [
        {
          "relationship_type_id": 1,
          "id": 4,
          "source_document_id": 2,
          "target_document_id": 1,
        },
      ],
      "relationship_target": []
    },
    {
      "id": 3,
      "name": "目暮十三",
      "department": {
        "parentId": 1,
        "id": 3,
        "color_of_department": "#39c5bb",
        "title": "警视厅",
      },
      "relationship_source": [
        {
          "relationship_type_id": 4,
          "id": 5,
          "source_document_id": 3,
          "target_document_id": 4,
        },
      ],
      "relationship_target": []
    },
    {
      "id": 4,
      "name": "高木涉",
      "department": {
        "parentId": 1,
        "id": 3,
        "color_of_department": "#39c5bb",
        "title": "警视厅",
      },
      "relationship_source": [],
      "relationship_target": []
    },
    {
      "id": 6,
      "name": "工藤新一",
      "department": {
        "parentId": 1,
        "id": 4,
        "color_of_department": "#549f06",
        "title": "帝丹高中",
      },
      "relationship_source": [],
      "relationship_target": []
    },
    {
      "id": 7,
      "name": "铃木园子",
      "department": {
        "parentId": 1,
        "id": 4,
        "color_of_department": "#549f06",
        "title": "帝丹高中",
      },
      "relationship_source": [
        {
          "relationship_type_id": 3,
          "id": 2,
          "source_document_id": 7,
          "target_document_id": 6,
        }
      ],
      "relationship_target": []
    },
  ],
}

const RelationshipData = [
    {
        "id": 1,
        "name": "父女",
    },
    {
        "id": 2,
        "name": "情侣",
    },
    {
        "id": 3,
        "name": "同学",
    },
    {
        "id": 4,
        "name": "下属",
    },
    {
        "id": 5,
        "name": "内容合并",
    },
    {
        "id": 6,
        "name": "替代关系",
    },
    {
        "id": 7,
        "name": "参考关系",
    }
]

const get_color = (relationship) => {
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

function unique(arr) {
  const res = new Map();
  return arr.filter((a) => !res.has(a.id) && res.set(a.id, 1));
}

function uniqueLink(arr) {
  return [...new Set(arr.map(item => JSON.stringify(item)))].map(item => JSON.parse(item))
}

const NodeViewBlock = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);
  let links = [];
  let allDepart = [
    {
      createdAt: "2024-09-01T05:58:29.101Z",
      updatedAt: "2024-09-05T05:13:16.028Z",
      parentId: null,
      id: 1,
      title: "东京都",
      isLeaf: false,
      department_id: null,
      createdById: 1,
      updatedById: 38,
      color_of_department: "#1677ff",
      parent: null
    }
  ]; // 所有部门
  const getOption = () => {
    let allCategories = []; // echart categories
    let allRelationship = []; // echart categories
    let allDocument = []; // 所有文件
    // 取所有的部门和关系信息
    data.data.map((item) => {
      allDocument.push(item);
      if (item.relationship_source.length) {
        item.relationship_source.map(relationship => {
          allRelationship.push(relationship)
          if (data.data.find(i => i.id === relationship.target_document_id)) {
            links.push({
              type: 'doc-doc',
              targetId: data.data.find(i => i.id === relationship.target_document_id)?.id,
              target: data.data.find(i => i.id === relationship.target_document_id)?.name,
              sourceId: item.id,
              source: item.name,
              category: RelationshipData.find(i => Number(i.id) === relationship.relationship_type_id).name,
              lineStyle: {
                color: get_color(RelationshipData.find(i => Number(i.id) === relationship.relationship_type_id).name)
              }
            });
          }
        })
      }
      if (item.relationship_target.length) {
        item.relationship_target.map(relationship => {
          if (data.data.find(i => i.id === relationship.source_document_id)) {
            links.push({
              type: 'doc-doc',
              targetId: item.id,
              target: item.name,
              sourceId: data.data.find(i => i.id === relationship.source_document_id)?.id,
              source: data.data.find(i => i.id === relationship.source_document_id).name,
              category: RelationshipData.find(i => Number(i.id) === relationship.relationship_type_id).name,
              lineStyle: {
                color: get_color(RelationshipData.find(i => Number(i.id) === relationship.relationship_type_id).name)
              }
            });
          }
        })
      }

      if (item.department?.title ) {
        links.push({
          type: 'dept-doc',
          targetId: item.id,
          target: item.name,
          sourceId: item.department.id,
          source: item.department.title,
          lineStyle: {
            color: get_color("从属")
          },
          category: ""
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
        deptId: item.id,
        dataId: 0 - item.id,
        name: item.title,
        draggable: false,
        symbolSize: [60, 60],
        itemStyle: {
          color: item.color_of_department || "gray"
        },
        value: 1
      };
      // 公司
      if (item.id === 1) {
        obj.symbolSize = [80, 80];
        obj.value = 2;
      } else {
        links.push({
          type: 'dept-dept',
          targetId: obj.deptId,
          target: obj.name,
          sourceId: 1,
          source: "东京都",
          category: "",
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
    links = uniqueLink(links)
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

  useEffect(() => {
    setLoading(true);
    setData(MockData);
    setLoading(false);
  }, []);

  function findParentNode(id, type, arr) {
    if (type === 'document') {
      links.map(item => {
        if (item.type === 'doc-doc' && item.targetId === id) {
          arr.push({type: 'document', id: item.sourceId, name: item.source })
        } else if (item.type === 'dept-doc' && item.targetId === id) {
          arr.push({type: 'department', id: item.sourceId, name: item.source })
        }
      })
    } else if (type === 'department') {
      links.map(item => {
        if (item.type === 'dept-dept' && item.targetId === id) {
          arr.push({type: 'department', id: item.sourceId, name: item.source })
        }
      })
    }
  }

  function findChildNode(id, type, arr) {
    if (type === 'document') {
      links.map(item => {
        if (item.type === 'doc-doc' && item.sourceId === id) {
          arr.push({type: 'document', id: item.targetId, name: item.target })
        }
      })
    } else if (type === 'department') {
      links.map(item => {
        if (item.type === 'dept-dept' && item.sourceId === id) {
          arr.push({type: 'department', id: item.targetId, name: item.target })
        } else if (item.type === 'dept-doc' && item.sourceId === id) {
          arr.push({type: 'document', id: item.targetId, name: item.target })
        }
      })
    }
  }

  const eventCheck = (e) => {
    console.log(links);
    console.log(e);
    
    const ParentNode = []
    const AncestorNode = []
    const ChildNode = []
    const GrandsonNode = []
    if (e.data.dataId > 0) {
      // 点击了文档
      // 父辈节点
      findParentNode(e.data.dataId, 'document', ParentNode)
      // 祖先辈节点
      ParentNode.map(item => {
        findParentNode(item.id, item.type, AncestorNode)
      })
      // 子节点
      findChildNode(e.data.dataId, 'document', ChildNode)
      // 孙子节点
      ChildNode.map(item => {
        findChildNode(item.id, item.type, GrandsonNode)
      })
    } else {
      // 点击了部门
      // 父辈节点
      findParentNode(e.data.deptId, 'department', ParentNode)
      // 祖先辈节点
      ParentNode.map(item => {
        findParentNode(item.id, item.type, AncestorNode)
      })
      // 子节点
      findChildNode(e.data.deptId, 'department', ChildNode)
      // 孙子节点
      ChildNode.map(item => {
        findChildNode(item.id, item.type, GrandsonNode)
      })
    }
    console.log(ParentNode, '父节点');
    console.log(AncestorNode, '祖先节点');
    console.log(ChildNode, '子节点');
    console.log(GrandsonNode, '孙子节点');
    window.dispatchEvent(new CustomEvent("ShowDocumentDetail", { detail: { id: e.data.dataId } }));
  };

  return (
    <div style={{ padding: 0, margin: "0 auto", width: "100%", height: 800, overflow: "auto" }}>
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
};

export default NodeViewBlock;
