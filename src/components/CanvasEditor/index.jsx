import "./style.css";
import { Init } from "./main.ts";
import { useEffect, useState } from "react";

const CanvasEditor = ({ width, id }) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(count)    
    if (count > 0) return
    setCount(n => n+1)
    setTimeout(() => {
      importData()
    }, 1000);
    async function importData() {
      new Promise((res, rej) => {
        if (id) {
          res('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' +
      'UEsFBgAAAAAXABcAtwUAAFwgAAAAAA==')
        } else {
          rej()
        }
      }).then(res => {
        Init(res, id)
      }).catch(_ => {})
    }
  }, [])
  return (
    <div style={{ width: `${width}px` }}>
      <div className="menu" editor-component="menu" style={{ width: `${width}px` }}>
        <div className="menu-item">
          <div className="menu-item__save" style={{ fontSize: "12px" }}>保存</div>
          <div className="menu-item__undo"><i></i></div>
          <div className="menu-item__redo"><i></i></div>
          <div className="menu-item__painter" title="格式刷(双击可连续使用)"><i></i></div>
          <div className="menu-item__format" title="清除格式"><i></i></div>
        </div>
        <div className="menu-divider"></div>
        <div className="menu-item">
          <div className="menu-item__bold"><i></i></div>
          <div className="menu-item__italic"><i></i></div>
          <div className="menu-item__underline"><i></i><span className="select"></span>
            <div className="options">
              <ul>
                <li data-decoration-style="solid"><i></i></li>
                <li data-decoration-style="double"><i></i></li>
                <li data-decoration-style="dashed"><i></i></li>
                <li data-decoration-style="dotted"><i></i></li>
                <li data-decoration-style="wavy"><i></i></li>
              </ul>
            </div>
          </div>
          <div className="menu-item__strikeout" title="删除线(Ctrl+Shift+X)"><i></i></div>
          <div className="menu-item__superscript"><i></i></div>
          <div className="menu-item__subscript"><i></i></div>
        </div>
        <div className="menu-divider"></div>
        <div className="menu-item">
          <div className="menu-item__left">
            <i></i>
          </div>
          <div className="menu-item__center"><i></i></div>
          <div className="menu-item__right"><i></i></div>
          <div className="menu-item__alignment"><i></i></div>
          <div className="menu-item__justify"><i></i></div>
          <div className="menu-item__list"><i></i><div className="options">
              <ul>
                <li><label>取消列表</label></li>
                <li data-list-type="ol" data-list-style="decimal">
                  <label>有序列表：</label>
                  <ol><li>________</li></ol>
                </li>
                <li data-list-type="ul" data-list-style="checkbox">
                  <label>复选框列表：</label>
                  <ul style={{ "listStyleType": "☑️ " }}>
                    <li>________</li>
                  </ul>
                </li>
                <li data-list-type="ul" data-list-style="disc">
                  <label>实心圆点列表：</label>
                  <ul style={{ "listStyleType": "disc" }}>
                    <li>________</li>
                  </ul>
                </li>
                <li data-list-type="ul" data-list-style="circle">
                  <label>空心圆点列表：</label>
                  <ul style={{ "listStyleType": "circle" }}>
                    <li>________</li>
                  </ul>
                </li>
                <li data-list-type="ul" data-list-style="square">
                  <label>空心方块列表：</label>
                  <ul style={{ "listStyleType": "square" }}>
                    <li>________</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="menu-divider"></div>
        <div className="menu-item">
          <div className="menu-item__table"><i title="表格"></i></div>
          <div className="menu-item__table__collapse">
            <div className="table-close">×</div>
            <div className="table-title">
              <span className="table-select">插入</span>
              <span>表格</span>
            </div>
            <div className="table-panel"></div>
          </div>
          <div className="menu-item__image">
            <i title="图片"></i>
            <input type="file" id="image" accept=".png, .jpg, .jpeg, .svg, .gif" />
          </div>
          <div className="menu-item__hyperlink">
            <i title="超链接"></i>
          </div>
        </div>
        <div className="menu-divider"></div>
        <div className="menu-item">
          <div className="menu-item__search" data-menu="search">
            <i></i>
          </div>
          <div className="menu-item__search__collapse" data-menu="search">
            <div className="menu-item__search__collapse__search">
              <input type="text" />
              <label className="search-result"></label>
              <div className="arrow-left"><i></i></div>
              <div className="arrow-right"><i></i></div>
              <span>×</span>
            </div>
            <div className="menu-item__search__collapse__replace">
              <input type="text" />
              <button>替换</button>
            </div>
          </div>
        </div>
      </div>
      <div className="editor" style={{ width: `${width}px` }}></div>
      <div className="footer" editor-component="footer" style={{ width: `${width}px` }}>
        <div>
          <span>字数：<span className="word-count">0</span></span>
        </div>
        <div>
          <div className="page-scale-minus" title="缩小(Ctrl+-)"><i></i></div>
          <span className="page-scale-percentage" title="显示比例(点击可复原Ctrl+0)">100%</span>
          <div className="page-scale-add" title="放大(Ctrl+=)">
            <i></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CanvasEditor;
