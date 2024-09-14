import React, { useEffect, useState } from "react";

import ReactECharts from "echarts-for-react";

const MockData = {
  "data": [
      {
          "createdAt": "2024-09-02T11:28:53.069Z",
          "updatedAt": "2024-09-12T06:36:34.729Z",
          "header_footer_id": 1,
          "template_id": 1,
          "department_id": 6,
          "owner_id": 39,
          "writer_group_id": null,
          "effective_at": "2024-09-05T16:00:00.000Z",
          "id": 8,
          "business_process_status": "生效",
          "docx_url": "/storage/uploads/F202409020001.docx",
          "name": "制度编订",
          "pdf_url": "/storage/uploads/F202409020001.pdf",
          "terminated_at": "2024-09-06T08:55:30.093Z",
          "published_at": "2024-09-05T16:00:00.000Z",
          "sn": "F202409020001",
          "version": "v01",
          "legacy_doc_sn": "N/A",
          "document_to_be_reviewed_ek": null,
          "status": "生效",
          "createdById": 39,
          "updatedById": 39,
          "level": [
              {
                  "createdAt": "2024-09-02T09:26:14.423Z",
                  "updatedAt": "2024-09-11T09:42:00.280Z",
                  "id": 3,
                  "name": "三级 （步骤层）",
                  "effective_date": "2024-09-10T16:00:00.000Z",
                  "terminate_date": "2024-09-29T16:00:00.000Z",
                  "createdById": 37,
                  "updatedById": 35,
                  "_document_m2m_level": {
                      "createdAt": "2024-09-12T06:36:34.725Z",
                      "updatedAt": "2024-09-12T06:36:34.725Z",
                      "level_id": 3,
                      "document_id": 8
                  }
              }
          ],
          "department": {
              "createdAt": "2024-09-02T08:33:58.898Z",
              "updatedAt": "2024-09-05T05:14:50.283Z",
              "parentId": 1,
              "id": 6,
              "title": "法律合规部",
              "isLeaf": true,
              "color_of_department": "#b73195",
              "department_id": null,
              "createdById": 35,
              "updatedById": 38
          },
          "relationship_source": [
              {
                  "createdAt": "2024-09-02T14:49:21.187Z",
                  "updatedAt": "2024-09-06T22:00:00.131Z",
                  "relationship_type_id": 2,
                  "id": 5,
                  "pdf_url": "/storage/uploads/1725453815879.pdf",
                  "relationship_count": 2,
                  "source_document_id": 8,
                  "target_document_id": 9,
                  "createdById": 38,
                  "updatedById": 39
              },
              {
                  "createdAt": "2024-09-03T05:01:22.267Z",
                  "updatedAt": "2024-09-06T08:57:06.613Z",
                  "relationship_type_id": 7,
                  "id": 8,
                  "pdf_url": null,
                  "relationship_count": null,
                  "source_document_id": 8,
                  "target_document_id": 1,
                  "createdById": 38,
                  "updatedById": 39
              },
              {
                  "createdAt": "2024-09-05T07:00:43.834Z",
                  "updatedAt": "2024-09-06T08:57:06.615Z",
                  "relationship_type_id": 3,
                  "id": 10,
                  "pdf_url": null,
                  "relationship_count": 2,
                  "source_document_id": 8,
                  "target_document_id": 1,
                  "createdById": 39,
                  "updatedById": 39
              },
              {
                  "createdAt": "2024-09-05T07:06:30.376Z",
                  "updatedAt": "2024-09-06T22:00:00.131Z",
                  "relationship_type_id": 2,
                  "id": 11,
                  "pdf_url": null,
                  "relationship_count": 2,
                  "source_document_id": 8,
                  "target_document_id": 9,
                  "createdById": 39,
                  "updatedById": 39
              }
          ],
          "relationship_target": [
              {
                  "createdAt": "2024-09-03T05:01:39.564Z",
                  "updatedAt": "2024-09-06T06:19:33.020Z",
                  "relationship_type_id": 7,
                  "id": 9,
                  "pdf_url": null,
                  "relationship_count": 1,
                  "source_document_id": 4,
                  "target_document_id": 8,
                  "createdById": 38,
                  "updatedById": 36
              },
              {
                  "createdAt": "2024-09-06T12:21:45.927Z",
                  "updatedAt": "2024-09-06T12:21:45.929Z",
                  "relationship_type_id": 1,
                  "id": 22,
                  "pdf_url": null,
                  "relationship_count": null,
                  "source_document_id": 24,
                  "target_document_id": 8,
                  "createdById": 35,
                  "updatedById": 35
              }
          ]
      },
      {
        "createdAt": "2024-09-02T11:28:53.069Z",
        "updatedAt": "2024-09-12T06:36:34.729Z",
        "header_footer_id": 1,
        "template_id": 1,
        "department_id": 6,
        "owner_id": 39,
        "writer_group_id": null,
        "effective_at": "2024-09-05T16:00:00.000Z",
        "id": 999,
        "business_process_status": "生效",
        "docx_url": "/storage/uploads/F202409020001.docx",
        "name": "测试游离节点",
        "pdf_url": "/storage/uploads/F202409020001.pdf",
        "terminated_at": "2024-09-06T08:55:30.093Z",
        "published_at": "2024-09-05T16:00:00.000Z",
        "sn": "F202409020001",
        "version": "v01",
        "legacy_doc_sn": "N/A",
        "document_to_be_reviewed_ek": null,
        "status": "生效",
        "createdById": 39,
        "updatedById": 39,
        "level": [
            {
                "createdAt": "2024-09-02T09:26:14.423Z",
                "updatedAt": "2024-09-11T09:42:00.280Z",
                "id": 3,
                "name": "三级 （步骤层）",
                "effective_date": "2024-09-10T16:00:00.000Z",
                "terminate_date": "2024-09-29T16:00:00.000Z",
                "createdById": 37,
                "updatedById": 35,
                "_document_m2m_level": {
                    "createdAt": "2024-09-12T06:36:34.725Z",
                    "updatedAt": "2024-09-12T06:36:34.725Z",
                    "level_id": 3,
                    "document_id": 8
                }
            }
        ],
        "department": {},
        "relationship_source": [],
        "relationship_target": []
      },
      {
          "createdAt": "2024-09-06T04:19:33.061Z",
          "updatedAt": "2024-09-12T06:35:57.121Z",
          "header_footer_id": null,
          "template_id": 2,
          "department_id": 2,
          "owner_id": 35,
          "writer_group_id": null,
          "effective_at": "2024-09-05T16:00:00.000Z",
          "id": 15,
          "business_process_status": null,
          "docx_url": null,
          "name": "test1",
          "pdf_url": null,
          "terminated_at": "2024-09-06T08:55:30.058Z",
          "published_at": "2024-09-05T16:00:00.000Z",
          "sn": "F202409060003",
          "version": "v08",
          "legacy_doc_sn": "N/A",
          "document_to_be_reviewed_ek": null,
          "status": "生效",
          "createdById": 38,
          "updatedById": 35,
          "level": [
              {
                  "createdAt": "2024-09-02T09:26:09.386Z",
                  "updatedAt": "2024-09-11T09:41:25.312Z",
                  "id": 2,
                  "name": "二级 （方法层）",
                  "effective_date": "2024-09-10T16:00:00.000Z",
                  "terminate_date": "2024-09-29T16:00:00.000Z",
                  "createdById": 37,
                  "updatedById": 35,
                  "_document_m2m_level": {
                      "createdAt": "2024-09-12T06:35:57.117Z",
                      "updatedAt": "2024-09-12T06:35:57.117Z",
                      "level_id": 2,
                      "document_id": 15
                  }
              }
          ],
          "department": {
              "createdAt": "2024-09-01T05:59:09.530Z",
              "updatedAt": "2024-09-05T05:13:23.542Z",
              "parentId": 1,
              "id": 2,
              "title": "总裁办",
              "isLeaf": true,
              "color_of_department": "#52c41a",
              "department_id": null,
              "createdById": 1,
              "updatedById": 38
          },
          "relationship_source": [
              {
                  "createdAt": "2024-09-06T04:19:33.066Z",
                  "updatedAt": "2024-09-06T04:19:33.069Z",
                  "relationship_type_id": 1,
                  "id": 15,
                  "pdf_url": null,
                  "relationship_count": null,
                  "source_document_id": 15,
                  "target_document_id": 1,
                  "createdById": 38,
                  "updatedById": 38
              }
          ],
          "relationship_target": []
      },
      {
          "createdAt": "2024-09-06T06:02:01.199Z",
          "updatedAt": "2024-09-06T22:00:00.053Z",
          "header_footer_id": null,
          "template_id": 1,
          "department_id": 4,
          "owner_id": 36,
          "writer_group_id": null,
          "effective_at": "2024-09-05T16:00:00.000Z",
          "id": 21,
          "business_process_status": null,
          "docx_url": null,
          "name": "SOP测试",
          "pdf_url": null,
          "terminated_at": "2024-09-06T08:55:30.042Z",
          "published_at": "2024-09-05T16:00:00.000Z",
          "sn": "F202409060009",
          "version": "v14",
          "legacy_doc_sn": "N/A",
          "document_to_be_reviewed_ek": null,
          "status": "生效",
          "createdById": 36,
          "updatedById": 36,
          "level": [
              {
                  "createdAt": "2024-09-02T09:26:04.452Z",
                  "updatedAt": "2024-09-11T09:40:58.529Z",
                  "id": 1,
                  "name": "一级（目标层）",
                  "effective_date": "2024-09-10T16:00:00.000Z",
                  "terminate_date": "2024-09-29T16:00:00.000Z",
                  "createdById": 37,
                  "updatedById": 35,
                  "_document_m2m_level": {
                      "createdAt": "2024-09-06T06:02:01.211Z",
                      "updatedAt": "2024-09-06T06:02:01.211Z",
                      "level_id": 1,
                      "document_id": 21
                  }
              }
          ],
          "department": {
              "createdAt": "2024-09-02T08:33:16.181Z",
              "updatedAt": "2024-09-05T05:14:05.242Z",
              "parentId": 1,
              "id": 4,
              "title": "运营部",
              "isLeaf": true,
              "color_of_department": "#1633aa",
              "department_id": null,
              "createdById": 35,
              "updatedById": 38
          },
          "relationship_source": [],
          "relationship_target": []
      },
      {
          "createdAt": "2024-09-06T12:20:25.153Z",
          "updatedAt": "2024-09-11T09:57:17.200Z",
          "header_footer_id": 2,
          "template_id": 1,
          "department_id": 2,
          "owner_id": 35,
          "writer_group_id": 2,
          "effective_at": "2024-09-05T16:00:00.000Z",
          "id": 24,
          "business_process_status": null,
          "docx_url": "/storage/uploads/F202409060012.docx",
          "name": "盈利性分析管理咨询项目",
          "pdf_url": "/storage/uploads/F202409060012.pdf",
          "terminated_at": null,
          "published_at": "2024-09-06T16:00:00.000Z",
          "sn": "F202409060012",
          "version": "v17",
          "legacy_doc_sn": "N/A",
          "document_to_be_reviewed_ek": null,
          "status": "生效",
          "createdById": 35,
          "updatedById": 35,
          "level": [
              {
                  "createdAt": "2024-09-02T09:26:04.452Z",
                  "updatedAt": "2024-09-11T09:40:58.529Z",
                  "id": 1,
                  "name": "一级（目标层）",
                  "effective_date": "2024-09-10T16:00:00.000Z",
                  "terminate_date": "2024-09-29T16:00:00.000Z",
                  "createdById": 37,
                  "updatedById": 35,
                  "_document_m2m_level": {
                      "createdAt": "2024-09-06T12:21:45.935Z",
                      "updatedAt": "2024-09-06T12:21:45.935Z",
                      "level_id": 1,
                      "document_id": 24
                  }
              }
          ],
          "department": {
              "createdAt": "2024-09-01T05:59:09.530Z",
              "updatedAt": "2024-09-05T05:13:23.542Z",
              "parentId": 1,
              "id": 2,
              "title": "总裁办",
              "isLeaf": true,
              "color_of_department": "#52c41a",
              "department_id": null,
              "createdById": 1,
              "updatedById": 38
          },
          "relationship_source": [
              {
                  "createdAt": "2024-09-06T12:21:45.927Z",
                  "updatedAt": "2024-09-06T12:21:45.929Z",
                  "relationship_type_id": 1,
                  "id": 22,
                  "pdf_url": null,
                  "relationship_count": null,
                  "source_document_id": 24,
                  "target_document_id": 8,
                  "createdById": 35,
                  "updatedById": 35
              }
          ],
          "relationship_target": []
      },
      {
          "createdAt": "2024-09-11T09:16:46.825Z",
          "updatedAt": "2024-09-11T09:55:05.819Z",
          "header_footer_id": null,
          "template_id": 2,
          "department_id": 3,
          "owner_id": 41,
          "writer_group_id": 2,
          "effective_at": "2024-09-10T16:00:00.000Z",
          "id": 30,
          "business_process_status": null,
          "docx_url": "/storage/uploads/F202409060012.docx",
          "name": "盈利性分析管理咨询项目重检1",
          "pdf_url": null,
          "terminated_at": null,
          "published_at": "2024-09-09T16:00:00.000Z",
          "sn": "F202409110001",
          "version": "v23",
          "legacy_doc_sn": "N/A",
          "document_to_be_reviewed_ek": null,
          "status": "生效",
          "createdById": 35,
          "updatedById": 35,
          "level": [
              {
                  "createdAt": "2024-09-02T09:26:04.452Z",
                  "updatedAt": "2024-09-11T09:40:58.529Z",
                  "id": 1,
                  "name": "一级（目标层）",
                  "effective_date": "2024-09-10T16:00:00.000Z",
                  "terminate_date": "2024-09-29T16:00:00.000Z",
                  "createdById": 37,
                  "updatedById": 35,
                  "_document_m2m_level": {
                      "createdAt": "2024-09-11T09:16:46.858Z",
                      "updatedAt": "2024-09-11T09:16:46.858Z",
                      "level_id": 1,
                      "document_id": 30
                  }
              }
          ],
          "department": {
              "createdAt": "2024-09-01T05:59:29.485Z",
              "updatedAt": "2024-09-05T05:13:36.059Z",
              "parentId": 1,
              "id": 3,
              "title": "金融科技部",
              "isLeaf": true,
              "color_of_department": "#f5222d",
              "department_id": null,
              "createdById": 1,
              "updatedById": 38
          },
          "relationship_source": [],
          "relationship_target": []
      }
  ],
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
      title: "全行",
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
