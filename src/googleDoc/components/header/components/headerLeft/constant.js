export const dropDownItems = [
  "File",
  "Edit",
  "View",
  "Insert",
  "Format",
  "Tools",
  "Extensions",
  "Help",
];
export const dropDownTabs = {
  File: {
    New: {
      imgEle: <span class="material-icons image-color">article</span>,
      hasDropDown:true
    },
    Open: {
      imgEle: <span class="material-icons image-color">folder</span>,
    },
    "Make a copy": {
      imgEle: <span class="material-icons image-color">content_copy</span>,
    },
    Share: {
      imgEle: <span class="material-icons image-color">person_add_alt</span>,
      hasDropDown:true
    },
    Email: {
      imgEle: <span class="material-icons image-color">email</span>,
      hasDropDown:true
    },
    Download: {
      imgEle: <span class="material-icons image-color">download</span>,
      hasDropDown:true
    },
    Rename: {
      imgEle: (
        <span class="material-icons image-color">
          drive_file_rename_outline
        </span>
      ),
    },
    Move: {
      imgEle: (
        <span class="material-icons image-color">drive_file_move_outline</span>
      ),
    },
    "Add shortcut to Drive": {
      imgEle: <span class="material-icons image-color">add_to_drive</span>,
    },
    "Move to Trash": {
      imgEle: <span class="material-icons image-color">delete</span>,
    },
    Details: {
      imgEle: <span class="material-icons-outlined image-color">info</span>,
    },
    Language: {
      imgEle: <span class="material-icons-outlined image-color">language</span>,
      hasDropDown:true
    },
    "Page Setup": {
      imgEle: (
        <span class="material-icons-outlined image-color">description</span>
      ),
    },
    Print: {
      imgEle: <span class="material-icons-outlined image-color">print</span>,
    },
  },
  Edit:{
    Undo:{
        imgEle:<span class="material-icons-outlined image-color">
        undo
        </span>
    },
    Redo:{
        imgEle:<span class="material-icons-outlined image-color">
        redo
        </span>
    },
    Cut:{
        imgEle:<span class="material-icons-outlined image-color">
        content_cut
        </span>
    },
    Copy:{
        imgEle:<span class="material-icons-outlined image-color">
        content_copy
        </span>
    },
    Paste:{
        imgEle:<span class="material-icons-outlined image-color">
        content_paste
        </span>
    },
    'Paste Without Formatting':{
        imgEle:<span class="material-icons-outlined image-color">
        content_paste_go
        </span>
    },
    'Select All':{
        imgEle:<span class="material-icons-outlined image-color">
        select_all
        </span>
    },
    Delete:{
        imgEle:<span class="material-icons-outlined image-color">
        delete
        </span>
    },
    'Find and replace':{
        imgEle:<span class="material-icons-outlined image-color">
        published_with_changes
        </span>
    }
  },
  View:{
    Mode:{
        imgEle:<span class="material-icons-outlined image-color">
        mode_edit
        </span>,
        hasDropDown:true
    },
    'Show print layout':{
        imgEle:<span class="material-icons-outlined image-color">
        check
        </span>
    },
    'Show ruler':{
        imgEle:<span class="material-icons-outlined image-color">
        check
        </span>
    },
    'Show outline':{
        imgEle:<span class="material-icons-outlined image-color">
        check
        </span>
    }
  },
  Insert:{
    Image:{
        imgEle:<span class="material-icons-outlined image-color">
        image
        </span>,
        hasDropDown:true
    },
    Table:{
        imgEle:<span class="material-icons-outlined image-color">
        table_chart
        </span>,
        hasDropDown:true
    },
    Drawing:{
        imgEle:<span class="material-icons-outlined image-color">
        draw
        </span>
        ,hasDropDown:true
    },
    Chart:{
        imgEle:<span class="material-icons-outlined image-color">
        bar_chart
        </span>
    },
    'Horizontal Line':{
        imgEle:<span class="material-icons-outlined image-color">
        minimize
        </span>
    },
    Emojis:{
        imgEle:<span class="material-icons-outlined image-color">
        mood
        </span>,
        hasDropDown:true
    },
    'Smart Chips':{
        imgEle:<span class="material-icons-outlined image-color">
        smart_toy
        </span>,
        hasDropDown:true
    },
    Dropdown:{
        imgEle:<span class="material-icons-outlined image-color">
        send_and_archive
        </span>
    },
    'Building Block':{
        imgEle:<span class="material-icons-outlined image-color">
        post_add
        </span>
    },
    Watermark:{
        imgEle:<span class="material-icons-outlined image-color">
        branding_watermark
        </span>,
        hasDropDown:true
    }
  },
  Format:{
    Text:{
        imgEle:<span class="material-icons-outlined image-color">
        format_bold
        </span>,
        hasDropDown:true
    },
    Paragraph:{
        imgEle:<span class="material-icons-outlined image-color">
        view_headline
        </span>,
        hasDropDown:true
    },
    Align:{
        imgEle:<span class="material-icons-outlined image-color">
        format_indent_increase
        </span>,
        hasDropDown:true
    },
    Line:{
        imgEle:<span class="material-icons-outlined image-color">
        format_line_spacing
        </span>
    },
    Columns:{
        imgEle:<span class="material-icons-outlined image-color">
        subject
        </span>
    },
    Bullets:{
        imgEle:<span class="material-icons-outlined image-color">
        format_list_numbered
        </span>
    },
    'Header and Footers':{
        imgEle:<span class="material-icons-outlined image-color">
        short_text
        </span>
    },
  },
  Tools:{
    'Spelling and grammar':{
        imgEle:<span class="material-icons-outlined image-color">
        spellcheck
        </span>
    },
    'Word count':{
        imgEle:<span class="material-icons-outlined image-color">
        article
        </span>
    },
    'Citations':{
        imgEle:<span class="material-icons-outlined image-color">
        feedback
        </span>
    },
    'Dictionary':{
        imgEle:<span class="material-icons-outlined image-color">
        find_in_page
        </span>
    },
    'Translate':{
        imgEle:<span class="material-icons-outlined image-color">
        g_translate
        </span>
    }
  },
  Extensions:{
    'Add ons':{
        imgEle:<span class="material-icons-outlined image-color">
        post_add
        </span>,
        hasDropDown:true
    },
    'Apps Script':{
        imgEle:<span class="material-icons-outlined image-color">
        javascript
        </span>,
        hasDropDown:true
    },
  },
  Help:{
    Help:{
        imgEle:<span class="material-icons-outlined image-color">
        help
        </span>
    },
    Training:{
        imgEle:<span class="material-icons-outlined image-color">
        model_training
        </span>
    },
    Updates:{
        imgEle:<span class="material-icons-outlined image-color">
        tips_and_updates
        </span>
    }
}
};
