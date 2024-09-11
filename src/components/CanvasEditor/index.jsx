import "./style.css";
import { exportData } from "./api.ts";
import { Init } from "./main.ts";
import { useEffect } from "react";

const CanvasEditor = ({ width, height, margin, id }) => {
  useEffect(() => {
    importData()
    async function importData() {
      const base64 = await exportData()
      Init(base64, id)
    }
  }, [])
  return (
    <div style={{ width: `${width}px`, minWidth: '794px', height: `${height}px`, margin: margin, position: 'relative', border: '1px solid #c6c6c6', boxShadow: '2px 2px 8px #c9c9c9' }}>
      <div className="menu" editor-component="menu">
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
      <div className="footer" editor-component="footer">
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
      <div className="editor" style={{ height: `${height}px` }}></div>
    </div>
  );
};
export default CanvasEditor;
