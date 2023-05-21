import ZoomDropDown from "./zoomDropdown/zoomDropDown";
import FontSize from "./fontSize/fontSize";

export const functionList = [
  {
    id: 1,
    element: (
      <span class="material-icons-outlined toolbar-options-img">undo</span>
    ),
  },
  {
    id: 2,
    element: (
      <span class="material-icons-outlined toolbar-options-img">redo</span>
    ),
  },
  {
    id: 3,
    element: (
      <span class="material-icons-outlined toolbar-options-img">print</span>
    ),
  },
  {
    id: 4,
    element: (
      <span class="material-icons-outlined toolbar-options-img">
        spellcheck
      </span>
    ),
  },
  {
    id: 5,
    element: (
      <span class="material-icons-outlined toolbar-options-img">
        format_paint
      </span>
    ),
  },
  {
    id: 5,
    element: <ZoomDropDown value="100%" size="s" isInputEnabled={true} />,
    isCustomEle:true
  },
  "space",
  {
    id: 6,
    element: <ZoomDropDown value="Normal Text" size="m" />,
    isCustomEle:true
  },
  {
    id: 7,
    element: <ZoomDropDown value="Arial" size="m" />,
    isCustomEle:true
  },
  "space",
  {
    id: 8,
    element: <FontSize />,
    isCustomEle:true
  },
  "space",
  {
    id: 9,
    element: (
      <span class="material-icons-outlined toolbar-options-img">
        format_bold
      </span>
    ),
  },
  {
    id: 10,
    element: (
      <span class="material-icons-outlined toolbar-options-img">
        format_italic
      </span>
    ),
  },
  {
    id: 11,
    element: (
      <span class="material-icons-outlined toolbar-options-img">
        format_underlined
      </span>
    ),
  },
  {
    id: 12,
    element: (
      <span class="material-icons-outlined toolbar-options-img">colorize</span>
    ),
  },
  "space",
  {
    id: 13,
    element: (
      <span class="material-icons-outlined toolbar-options-img">
        insert_link
      </span>
    ),
  },
  {
    id: 14,
    element: (
      <span class="material-icons-outlined toolbar-options-img">
        add_comment
      </span>
    ),
  },
  {
    id: 15,
    element: (
      <span class="material-icons-outlined toolbar-options-img">image</span>
    ),
  },
  "space",
  {
    id: 16,
    element: (
      <>
        <span class="material-icons-outlined toolbar-options-img">
          format_align_left
        </span>
        <span class="material-icons-outlined  toolbar-options-img">
          arrow_drop_down
        </span>
      </>
    ),
  },
  {
    id: 17,
    element: (
      <span class="material-icons-outlined toolbar-options-img">
        format_line_spacing
      </span>
    ),
  },
  {
    id: 18,
    element: (
      <>
        <span class="material-icons-outlined toolbar-options-img">
          checklist
        </span>
        <span class="material-icons-outlined  toolbar-options-img">
          arrow_drop_down
        </span>
      </>
    ),
  },
  {
    id: 19,
    element: (
      <>
        <span class="material-icons-outlined toolbar-options-img">
          format_list_bulleted
        </span>
        <span class="material-icons-outlined  toolbar-options-img">
          arrow_drop_down
        </span>
      </>
    ),
  },
  {
    id: 20,
    element: (
      <>
        <span class="material-icons-outlined toolbar-options-img">
          format_list_numbered
        </span>
        <span class="material-icons-outlined  toolbar-options-img">
          arrow_drop_down
        </span>
      </>
    ),
  },
  {
    id: 21,
    element: (
      <span class="material-icons-outlined toolbar-options-img">
        format_indent_decrease
      </span>
    ),
  },
  {
    id: 22,
    element: (
      <span class="material-icons-outlined toolbar-options-img">
        format_indent_increase
      </span>
    ),
  },
  {
    id: 23,
    element: (
      <span class="material-icons-outlined toolbar-options-img">more_vert</span>
    ),
  },
  {
    id: 24,
    element: (
      <span class="material-icons-outlined toolbar-options-img">edit</span>
    ),
  },
];
