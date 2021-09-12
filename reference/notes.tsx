// full computer screen size (for me): 
// zoom out: 4-5 columns
// smaller window, 3 columns, then 2 (larger, but side by side aligned)
// finally, smallest is one card that makes it look like an instagram feed

// They're all just cards of differing portions that link to an article or story from a social media account post. Which means For each card there are the same repeatable properties (modular components--build 1 -3 sizes).
// article
//   -| div='thumbnail-title-wrapper'
//     -| div='excerpt-thumb
//       -| a
//       -| img
//       -| div="thumb-overlay"
//         -| div='entry-text'
//           -| header='entry-header'
//             -| time
//              -| div='date-wrapper'
//               -| span='month'
//               -| span='day'
//             -| h2='entry-title'
//               -| a
//                -| time
//               -| ::after
//           -| div='entry-content'
//             -| div='blog-meta-item-author'
//               -| a='/?author'
//             -| div='blog-categories'
//               -| a='/blog-category'
//             -| div='entry-excerpt p-summary'
//               -| p='title'







const card: object = {
  "Article": {
    "properties": {
      'classes': [9, '...'],
      'id': 'article-###',
      'label': 'Blog Post',
      'data-item-id': 'a#',
      'data-offset': '###',
      'style': 'HAND STYLED PROPERTIES',
    },
    'Div': {
      'properties': {
        'classes': 'thumbnail-title-wrapper',
      },
      'Div': {
        'properties': {
          'classes': 'excerpt-thumb',
        },
        'A': {
          'properties': {
            'classes': [3, '...'],
            'style': 'HAND STYLED PROPERTIES'
          },
          'Img': [
            'data-src', '...src',
          ],
          'Div': {
            'classes': 'thumb-overlay',
          }
        }
      }
    },
    'Div': 'entry-text' => 'header' => ??;
  }
}
{


},
{

}
  ] 
    
    
}


// 09.11.2021
/**
 * Format card/post file tree structure
 *
 */