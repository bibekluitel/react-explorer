export const initialJson= [
    {
      "title": "folder_1",
      "type": "folder",
      "permission": true,
      "children": [
          {
            "title": "file_1",
            "type": "sketch"
          },
          {
            "title": "file_1",
            "type": "xlsx"
          },
          {
            "type": "shortcut", 
            "path": "/folder_2"
          },
          {
            "title": "folder_3",
            "type": "folder",
            "permission": true,
            "children": [
                {
                  "title": "file_5",
                  "type": "jpg"
                },
                {
                  "title": "file_6",
                  "type": "png"
                }
            ]
          }
          
      ]
    }, 
    {
      "title": "folder_2",
      "type": "folder",
      "permission": false,
      "children": [
          {
            "title": "file_1",
            "type": "sketch"
          },
          {
            "title": "file_1",
            "type": "xlsx"
          }
      ]
    }
]