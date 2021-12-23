export default {
  type: 'flex',
  altText: '離我最近的餐廳',
  contents: {
    type: 'carousel',
    contents: [
      {
        type: 'bubble',
        hero: {
          type: 'image',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png',
          action: {
            type: 'message',
            label: 'action',
            text: '123'
          }
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: '店名',
              wrap: true,
              weight: 'bold',
              size: 'xxl'
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '$49',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  flex: 0
                },
                {
                  type: 'text',
                  text: '・菜型',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  flex: 0
                }
              ],
              paddingTop: 'sm'
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'icon',
                  url: 'https://cdn-icons-png.flaticon.com/512/684/684809.png'
                },
                {
                  type: 'text',
                  text: '與我的距離為 10.2 km',
                  offsetStart: 'md'
                }
              ],
              margin: 'none',
              action: {
                type: 'uri',
                label: 'action',
                uri: 'http://linecorp.com/'
              },
              paddingTop: 'lg'
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: '新北市新店區'
                }
              ],
              margin: 'none',
              paddingAll: 'none',
              paddingTop: 'lg'
            }
          ]
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'button',
              style: 'link',
              action: {
                type: 'uri',
                label: 'Connect website',
                uri: 'https://linecorp.com'
              }
            },
            {
              type: 'button',
              style: 'link',
              action: {
                type: 'uri',
                label: 'Open Google Map',
                uri: 'https://linecorp.com'
              }
            }
          ]
        }
      }, {
        type: 'bubble',
        hero: {
          type: 'image',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png',
          action: {
            type: 'message',
            label: 'action',
            text: '123'
          }
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: '店名',
              wrap: true,
              weight: 'bold',
              size: 'xxl'
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '$49',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  flex: 0
                },
                {
                  type: 'text',
                  text: '・菜型',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  flex: 0
                }
              ],
              paddingTop: 'sm'
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'icon',
                  url: 'https://cdn-icons-png.flaticon.com/512/684/684809.png'
                },
                {
                  type: 'text',
                  text: '與我的距離為 10.2 km',
                  offsetStart: 'md'
                }
              ],
              margin: 'none',
              action: {
                type: 'uri',
                label: 'action',
                uri: 'http://linecorp.com/'
              },
              paddingTop: 'lg'
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: '新北市新店區'
                }
              ],
              margin: 'none',
              paddingAll: 'none',
              paddingTop: 'lg'
            }
          ]
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'button',
              style: 'link',
              action: {
                type: 'uri',
                label: 'Connect website',
                uri: 'https://linecorp.com'
              }
            },
            {
              type: 'button',
              style: 'link',
              action: {
                type: 'uri',
                label: 'Open Google Map',
                uri: 'https://linecorp.com'
              }
            }
          ]
        }
      }, {
        type: 'bubble',
        hero: {
          type: 'image',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png',
          action: {
            type: 'message',
            label: 'action',
            text: '123'
          }
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: '店名',
              wrap: true,
              weight: 'bold',
              size: 'xxl'
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '$49',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  flex: 0
                },
                {
                  type: 'text',
                  text: '・菜型',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  flex: 0
                }
              ],
              paddingTop: 'sm'
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'icon',
                  url: 'https://cdn-icons-png.flaticon.com/512/684/684809.png'
                },
                {
                  type: 'text',
                  text: '與我的距離為 10.2 km',
                  offsetStart: 'md'
                }
              ],
              margin: 'none',
              action: {
                type: 'uri',
                label: 'action',
                uri: 'http://linecorp.com/'
              },
              paddingTop: 'lg'
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: '新北市新店區'
                }
              ],
              margin: 'none',
              paddingAll: 'none',
              paddingTop: 'lg'
            }
          ]
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'button',
              style: 'link',
              action: {
                type: 'uri',
                label: 'Connect website',
                uri: 'https://linecorp.com'
              }
            },
            {
              type: 'button',
              style: 'link',
              action: {
                type: 'uri',
                label: 'Open Google Map',
                uri: 'https://linecorp.com'
              }
            }
          ]
        }
      }, {
        type: 'bubble',
        hero: {
          type: 'image',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png',
          action: {
            type: 'message',
            label: 'action',
            text: '123'
          }
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: '店名',
              wrap: true,
              weight: 'bold',
              size: 'xxl'
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '$49',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  flex: 0
                },
                {
                  type: 'text',
                  text: '・菜型',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  flex: 0
                }
              ],
              paddingTop: 'sm'
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'icon',
                  url: 'https://cdn-icons-png.flaticon.com/512/684/684809.png'
                },
                {
                  type: 'text',
                  text: '與我的距離為 10.2 km',
                  offsetStart: 'md'
                }
              ],
              margin: 'none',
              action: {
                type: 'uri',
                label: 'action',
                uri: 'http://linecorp.com/'
              },
              paddingTop: 'lg'
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: '新北市新店區'
                }
              ],
              margin: 'none',
              paddingAll: 'none',
              paddingTop: 'lg'
            }
          ]
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'button',
              style: 'link',
              action: {
                type: 'uri',
                label: 'Connect website',
                uri: 'https://linecorp.com'
              }
            },
            {
              type: 'button',
              style: 'link',
              action: {
                type: 'uri',
                label: 'Open Google Map',
                uri: 'https://linecorp.com'
              }
            }
          ]
        }
      }, {
        type: 'bubble',
        hero: {
          type: 'image',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png',
          action: {
            type: 'message',
            label: 'action',
            text: '123'
          }
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: '店名',
              wrap: true,
              weight: 'bold',
              size: 'xxl'
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '$49',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  flex: 0
                },
                {
                  type: 'text',
                  text: '・菜型',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  flex: 0
                }
              ],
              paddingTop: 'sm'
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'icon',
                  url: 'https://cdn-icons-png.flaticon.com/512/684/684809.png'
                },
                {
                  type: 'text',
                  text: '與我的距離為 10.2 km',
                  offsetStart: 'md'
                }
              ],
              margin: 'none',
              action: {
                type: 'uri',
                label: 'action',
                uri: 'http://linecorp.com/'
              },
              paddingTop: 'lg'
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: '新北市新店區'
                }
              ],
              margin: 'none',
              paddingAll: 'none',
              paddingTop: 'lg'
            }
          ]
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'button',
              style: 'link',
              action: {
                type: 'uri',
                label: 'Connect website',
                uri: 'https://linecorp.com'
              }
            },
            {
              type: 'button',
              style: 'link',
              action: {
                type: 'uri',
                label: 'Open Google Map',
                uri: 'https://linecorp.com'
              }
            }
          ]
        }
      }
    ]
  }
}
