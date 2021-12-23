export default {
  type: 'flex',
  altText: '請選擇想查詢的城市',
  contents:
    {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'image',
                url: 'https://media.istockphoto.com/photos/taipei-city-panorama-in-taiwan-picture-id1209191587?k=20&m=1209191587&s=612x612&w=0&h=pDMOPP81zeWK6zhXKY0fTxdcYZCXG86QtlDa27w_z6A=',
                size: '5xl',
                aspectMode: 'cover',
                aspectRatio: '150:150',
                gravity: 'center',
                flex: 1
              },
              {
                type: 'image',
                url: 'https://media.istockphoto.com/photos/night-view-of-taichung-picture-id522713679?k=20&m=522713679&s=612x612&w=0&h=5z5kyF3WQMf3tg6gUYfwupO6pY3zE6U3EL_GaM9nxj8=',
                gravity: 'center',
                size: '5xl',
                aspectRatio: '150:150',
                aspectMode: 'cover'
              }
            ]
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: '請選擇想查詢的城市',
                size: 'xl',
                weight: 'bold',
                align: 'center'
              }
            ],
            spacing: 'xl',
            paddingAll: '20px',
            offsetTop: 'md'
          }
        ],
        paddingAll: '0px'
      },
      footer: {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'button',
            action: {
              type: 'postback',
              label: '台北',
              data: 'taipei'
            },
            offsetTop: 'none',
            offsetBottom: 'none',
            offsetStart: 'none',
            offsetEnd: 'none',
            color: '#aaaaaa',
            style: 'primary'
          },
          {
            type: 'button',
            action: {
              type: 'postback',
              label: '台中',
              data: 'taichung'
            },
            style: 'primary',
            offsetEnd: 'none',
            margin: 'xxl',
            color: '#aaaaaa'
          }
        ],
        margin: 'none',
        offsetStart: 'none',
        paddingAll: 'lg'
      }
    }

}
