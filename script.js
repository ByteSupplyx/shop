// Dados dos produtos
const products = [
  // 1. Teclados Mecânicos

  {
  id: 601,
  category: "Teclados",
  name: "AULA Hero68 HE 65% Hot-Swap Wired Magnetic Gaming Keyboard",
  description: "Teclado gamer 65% compacto, layout ANSI US, hot-swap, efeito hall 8kHz, RGB backlight, design magnético, ideal para jogos e digitação rápida.",
  price: 238.51,
  image: "https://ae-pic-a1.aliexpress-media.com/kf/Se6c08b6dc7ca43a6aef315edb981a7c8y.jpg",
  link: "https://s.click.aliexpress.com/e/_ol62hWn"
},
  {
    id: 23,
    category: "Teclados",
    name: "Teclado Mecânico Gamer Redragon Dragonborn",
    description: "Compacto 60% ABNT2, RGB, Switch Brown tátil. Ideal para performance e estilo no setup gamer.",
    price: 298.21,
    image: "https://down-br.img.susercontent.com/file/sg-11134201-7rdxm-lz56dvi0efz6a7.webp",
    link: "https://s.shopee.com.br/2Vh12Pypbi"
  },
  {
    id: 24,
    category: "Teclados",
    name: "Teclado Mecânico Gamer Redragon Fizz",
    description: "Teclado 60% ABNT2 RGB com keycaps doubleshot, leve, portátil e resistente para gamers exigentes.",
    price: 257.62,
    image: "https://down-br.img.susercontent.com/file/sg-11134201-7rdya-mc27shdse1q196.webp",
    link: "https://s.shopee.com.br/709QOmxhTj"
  },
 

  {
    id: 28,
    category: "Teclados",
    name: "Teclado Mecânico Gamer Lehmox (LEY-2080 / LEY2081 / T61)",
    description: "Três modelos de teclado mecânico com switch azul ou vermelho (envio aleatório), conexão USB, compactos e resistentes. Ideais para gamers e produtividade, com construção premium e resposta tátil rápida.",
    price: 112.99,
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1g5xrpu7b2p25.webp",
    link: "https://s.shopee.com.br/VvwlvL6LY"
  },
  {
  id: 106,
  name: "Teclado Gamer 61 Teclas RGB Compacto USB-C",
  description: "Mini teclado com fio, 61 teclas com luz RGB e cabo USB-C plugável. Ideal para setups compactos e viagens.",
  price: 87.38,
  category: "Teclados",
  image: "https://down-br.img.susercontent.com/file/sg-11134201-7rdxs-mcg9ljwyouk79d.webp",
  link: "https://s.shopee.com.br/30dYBHRmpI"
},
{
  id: 107,
  name: "Teclado Gamer Single Hand Uma Mão RGB",
  description: "Teclado semi-mecânico de uma mão com LED RGB, apoio ergonômico e conexão USB 2.0. Compacto, leve e ideal para jogos.",
  price: 42.56,
  category: "Teclados",
  image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-malddqk8ha0pe6.webp",
  link: "https://s.shopee.com.br/AA6ij8RXET"
},
 {
  id: 211,
  name: "Teclado Mecânico Akko MonsGeek FUN60 60% Switch Magnético",
  description: "Teclado gamer compacto 60% com switches magnéticos, trigger ultra rápido de 0.01mm, polling rate de 8K, iluminação ARGB e design customizado HE/TMR. Ideal para performance máxima.",
  price: 173.75,
  category: "Teclados",
  image: "https://ae-pic-a1.aliexpress-media.com/kf/S5fb48a1c54644d729c4184b89b8dc198G.jpg",
  link: "https://s.click.aliexpress.com/e/_oBLZcC1"
},
{
  id: 112,
  name: "Teclado Mecânico Gamer AULA F75 RGB 75% Layout",
  description: "Teclado mecânico gamer AULA F75 com conexão 2.4G/Bluetooth/Cabo, layout 75%, estrutura Gasket, iluminação RGB e perfil OEM customizado. Perfeito para setups modernos e versáteis.",
  price: 233.33,
  category: "Teclados",
  image: "https://ae-pic-a1.aliexpress-media.com/kf/S9d0c285127124820ae8fda27a0cc0b34k.jpg",
  link: "https://s.click.aliexpress.com/e/_oC8cbP7"
},

{
  id: 214,
  category: "Teclados",
  name: "AULA Hero68 HE 65% Hot-Swap Wired Magnetic Gaming Keyboard",
  description: "Teclado gamer 65% compacto, layout ANSI US, hot-swap, efeito hall 8kHz, RGB backlight, design magnético, ideal para jogos e digitação rápida.",
  price: 238.51,
  image: "https://ae-pic-a1.aliexpress-media.com/kf/Se6c08b6dc7ca43a6aef315edb981a7c8y.jpg",
  link: "https://s.click.aliexpress.com/e/_ol62hWn"
},
{
  id: 602,
  category: "Processadores",
  name: "Processador AMD Ryzen 5 5600GT, 3.6GHz (4.6GHz Turbo), AM4, Cooler Incluso",
  description: "6 núcleos, 12 threads, soquete AM4, cache L3 de 16MB, até 4.6GHz, TDP 65W, cooler Wraith Stealth incluso.",
  price: 888.12,
  image: "https://down-br.img.susercontent.com/file/br-11134201-7r98o-mcckkx5tomao9e@resize_w900_nl.webp",
  link: "https://s.shopee.com.br/6fX4NIIqOv"
},
{
  id: 603,
  category: "Memória RAM",
  name: "Memória DDR4 XPG Spectrix D35G, RGB, 8GB, 3200MHz, Black",
  description: "DDR4, 8GB, 3200MHz, CL16, RGB endereçável, dissipador de calor baixo perfil, suporte Intel XMP 2.0.",
  price: 270.90,
  image: "https://down-br.img.susercontent.com/file/br-11134201-7r98o-mccksufw7m5c29.webp",
  link: "https://s.shopee.com.br/10ARDDNk3"
},
  {
  id: 604,
  category: "Armazenamento",
  name: "SSD Pichau Rover, 512GB, M.2 2280, PCIe NVMe",
  description: "Velocidade de leitura 3500MB/s e gravação 1800MB/s, interface PCIe 3.0 NVMe, TBW 160TB, design compacto.",
  price: 331.68,
  image: "https://down-br.img.susercontent.com/file/sg-11134201-7rdw3-mcw7c0v3a7l2d5.webp",
  link: "https://s.shopee.com.br/AKQMkPmOKA"
},
{
  id: 605,
  category: "Fontes",
  name: "Fonte TGT Enfield, 500W, ATX Bivolt, Preto",
  description: "500W, ATX 2.31, bivolt, ventoinha 120mm, baixo ruído, proteções OVP/UVP/SCP/OPP.",
  price: 188.22,
  image: "https://down-br.img.susercontent.com/file/sg-11134201-7rdx0-m1il0rnfbg3sc6.webp",
  link: "https://s.shopee.com.br/6KuDzCpBT8"
},



  // 2. Kits de Mobilador (Celular)
  {
    id: 2,
    category: "Kits Gamer",
    name: "Kit Mobilador Gamer Celular Android Completo",
    description: "Transforme seu celular em um setup gamer com teclado one hand, mouse LED, mousepad, tripé, hub USB e adaptador OTG. Compatível com Android.",
    price: 49.99,
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-ma5teyk27hc1ae@resize_w900_nl.webp",
    link: "https://s.shopee.com.br/gFFTiPhTt"
  },
  {
    id: 27,
    category: "Kits Gamer",
    name: "Kit Mobilador Gamer Completo para Celular (7 em 1)",
    description: "Transforme seu Android em um setup gamer com teclado, mouse, mouse pad, tripé, hub OTG e mais.",
    price: 52.99,
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m32f17midxcj27.webp",
    link: "https://s.shopee.com.br/40VopmvMzI"
  },

  // 3. Combos e Kits Teclado + Mouse
    
  {
    id: 1,
    category: "Kits Gamer",
    name: "Kit Gamer Teclado, Mouse RGB, MousePad LED e Headset",
    description: "Monte seu setup gamer com teclado semi-mecânico iluminado, mouse RGB de 7 botões, mousepad grande (com ou sem LED) e headset com áudio 360° e iluminação. Conforto, performance e estilo para jogos.",
    price: 62.99,
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m84xf76mh33l7c.webp",
    link: "https://s.shopee.com.br/4Ap7OdLlxd"
  },
  {
    id: 25,
    category: "Kits Gamer",
    name: "Kit Teclado + Mouse Gamer RGB LED",
    description: "Combo com teclado semi-mecânico e mouse óptico com iluminação RGB fixa. Ideal para setups acessíveis.",
    price: 53.88,
    image: "https://down-br.img.susercontent.com/file/sg-11134201-7rbng-lqm91eud23c0c0.webp",
    link: "https://s.shopee.com.br/2LNaqKP0qC"
  },

  // 4. Mouses
  {
    id: 26,
    category: "Mouses",
    name: "Mouse Bluetooth Attack Shark X11 – Tripla Conexão",
    description: "Mouse gamer RGB com fio, 2.4G e Bluetooth 5.2. Até 22.000 DPI, base magnética, leve e ergonômico.",
    price: 160.90,
    image: "https://down-br.img.susercontent.com/file/sg-11134201-7rccw-m6gnhu4oo78219@resize_w900_nl.webp",
    link: "https://s.shopee.com.br/zg4Ccegr"
  },
  {
  id: 108,
  name: "Mouse Gamer 6 Botões 12.800 DPI Knup KP-MU026",
  description: "Mouse óptico gamer com sensor instantâneo A825F, 6 botões, até 12.800 DPI e 5 milhões de cliques. Design ergonômico e alta precisão.",
  price: 83.60,
  category: "Mouses",
  image: "https://down-br.img.susercontent.com/file/sg-11134201-7rd4h-m7tqne7rck9z6b.webp",
  link: "https://s.shopee.com.br/AA6ikFe5Kg"
},
{
  id: 109,
  name: "Mouse Gamer Redragon Cobra V2 RGB 12400 DPI M711 V2",
  description: "Mouse gamer Redragon Cobra V2 com sensor Pixart PWM3327, até 12400 DPI, 8 botões programáveis, iluminação RGB e design ergonômico.",
  price: 135.90,
  category: "Mouses",
  image: "https://down-br.img.susercontent.com/file/br-11134201-7r98o-mcckubecpqsgfa.webp",
  link: "https://s.shopee.com.br/3LGObqQ2Lf"
},
{
  id: 211,
  name: "Mouse Gamer Mancer Lead 2 RGB 12400 DPI 7 Botões",
  description: "Mouse gamer Mancer Lead 2 com sensor PMW3327+HTS71, 12400 DPI ajustável, 7 botões, RGB configurável, switches Kailh 20M e construção ergonômica com apenas 70g.",
  price: 88.22,
  category: "Mouses",
  image: "https://down-br.img.susercontent.com/file/sg-11134201-7rd3k-lw91eqpznohqe4.webp",
  link: "https://s.shopee.com.br/8Kf4ZCgYnS"
},
{
  id: 113,
  category: "Mouses",
  name: "Mouse Gamer Attack Shark R1 X11 Wireless 18K DPI",
  description: "Tri-Mode: Bluetooth / 2.4GHz / Fio. Sensor PAW3311, leve, com macros e alta precisão. Ideal para setups gamers.",
  price: 90.22,
  image: "https://ae-pic-a1.aliexpress-media.com/kf/S5c0bd80f53774294ba4d4170edbb7cd3U.png",
  link: "https://s.click.aliexpress.com/e/_olD5YjD"
},


// Placas De Video
{
  id: 110,
  name: "Placa de Vídeo Soyo Radeon RX580 8G GDDR5 Monarch Dragon",
  description: "Placa de vídeo SOYO RX580 com 8GB GDDR5, até 1750MHz, suporte a DirectX 12, PCIe 3.0, resfriamento a ar e conectividade HDMI/DisplayPort. Ideal para gamers e criadores de conteúdo.",
  price: 899.90,
  category: "Placas de Vídeo",
  image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lolne6xswuz04d.webp",
  link: "https://s.shopee.com.br/5Ai2nomvwo"
},




  // 5. Headsets e Fones
  {
    id: 5,
    category: "Headsets e Fones",
    name: "Fone Gamer S25 com Microfone, Hifi e Cancelamento de Ruído",
    description: "Fone ergonômico com plugue 3,5mm/Type-C, cancelamento de ruído, som imersivo e microfone HD.",
    price: 25.61,
    image: "https://down-br.img.susercontent.com/file/sg-11134301-7rasx-mb3c5f6lt7xfac.webp",
    link: "https://s.shopee.com.br/4q4oSeh636"
  },
  {
    id: 6,
    category: "Headsets e Fones",
    name: "Headset Gamer Knup KP-455A",
    description: "Mergulhe na adrenalina dos jogos com o fone Knup KP-455A. Compatível com PC, celular, PS4, PS5 e Xbox, proporciona uma experiência sonora imersiva que transforma sua gameplay.",
    price: 98.38,
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m0jom3bsas8x84.webp",
    link: "https://s.shopee.com.br/1qREJ2eUNQ"
  },

  // 6. Mousepads
  {
    id: 7,
    category: "Mousepads",
    name: "Mouse Pad Gamer Dragão RGB Speed LED",
    description: "Mouse pad grande com LED RGB de 13 cores, tecido Speed, impermeável. Ideal para gamers que buscam estilo e performance.",
    price: 12.50,
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lwiqszin5e2e19.webp",
    link: "https://s.shopee.com.br/9ADnfveaIl"
  },
  {
    id: 20,
    category: "Mousepads",
    name: "Mousepad Gamer PCYes Dr Kepler 500x400mm",
    description: "Mousepad premium com superfície Speed, bordas costuradas e base antiderrapante. Ideal para precisão e durabilidade no setup gamer.",
    price: 64.90,
    image: "https://down-br.img.susercontent.com/file/br-11134201-7r98o-mcclcuqm54rs89.webp",
    link: "https://s.shopee.com.br/3fsyOXaUJA"
  },
  {
    id: 21,
    category: "Mousepads",
    name: "Mousepad Gamer Dragão Chinês 70x35cm",
    description: "Mousepad com arte oriental e design premium. Superfície de alta precisão, base antiderrapante e bordas costuradas. Estilo e performance no seu setup.",
    price: 22.90,
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m7m8bormaqhgf9.webp",
    link: "https://s.shopee.com.br/1qRKDHF4Ac"
  },
  {
    id: 22,
    category: "Mousepads",
    name: "Mousepad Gamer Dragão Japonês Personalizado 70x35",
    description: "Mousepad grande e antiderrapante com estampas exclusivas, ideal para gamers e setups personalizados. Alta durabilidade e precisão.",
    price: 19.95,
    image: "https://down-br.img.susercontent.com/file/sg-11134201-7rfhd-m39sn3i8kdig7d.webp",
    link: "https://s.shopee.com.br/7ASqZAIJgT"
  },

  // ARMAZENAMENTO
  {
  id: 214,
  name: "SSD NVMe KOOTION X16Plus M.2 PCIe 4.0x4",
  description: "SSD interno KOOTION X16Plus M.2 2280 com interface PCIe 4.0x4, velocidades ultra-rápidas e compatibilidade com PS5, notebooks e PCs. Disponível em versões de 512GB, 1TB e 2TB para máxima performance.",
  price: 297.25,
  category: "Armazenamento",
  image: "https://ae-pic-a1.aliexpress-media.com/kf/S93ae9999727a4c649001676d347a080e6.jpeg",
  link: "https://s.click.aliexpress.com/e/_oFLBLRT"
},
  
   {
     id: 964,
    name: "Fonte TGT Enfield, 500W, ATX Bivolt, Preto",
    price: 188.22,
    image: "https://down-br.img.susercontent.com/file/sg-11134201-7rdx0-m1il0rnfbg3sc6.webp",
    link: "https://s.shopee.com.br/6KuDzCpBT8",
    description: "500W, ATX 2.31, bivolt, ventoinha 120mm, baixo ruído, proteções OVP/UVP/SCP/OPP.",
    category: "Fontes"
  },

//Placas Maes
{
  id: 115,
  name: "Placa-mãe QIYIDA X99 D4 TPM2.0 LGA 2011-3",
  description: "Placa-mãe QIYIDA X99 D4 com chipset X99 C612, suporte a memória DDR4, slot M.2, SATA 3.0, USB 3.0 e PCIe x16. Ideal para setups potentes e custo-benefício.",
  price: 247.34,
  category: "Placas-mãe",
  image: "https://ae-pic-a1.aliexpress-media.com/kf/S84ef02bad81447f599cd7a339b970a41K.jpg",
  link: "https://s.click.aliexpress.com/e/_ooipObJ"
},
  
{
  id: 116,
  name: "Kit MACHINIST B9 X99 - Placa-mãe + CPU Xeon E5 2630 V4 + RAM 16GB DDR4",
  description: "Conjunto com placa-mãe X99 LGA2011-3, processador Intel Xeon E5 2630 V4 e memória DDR4 16GB 2400MHz. Suporte a NVMe M.2 e SATA. Excelente custo-benefício para setups de alto desempenho.",
  price: 275.32,
  category: "Placas-mãe",
  image: "https://ae-pic-a1.aliexpress-media.com/kf/S69ca326febb949a2bdf8f8b3e011e2ecy.jpg",
  link: "https://s.click.aliexpress.com/e/_olgc90N"
},
{
  id: 117,
  name: "Placa-mãe MACHINIST X99 PR9 - LGA 2011-3 Suporte Xeon E5 V3/V4",
  description: "Placa-mãe X99 PR9 com suporte para CPUs Intel Xeon E5 V3/V4, memória DDR4, conexões SATA e slot NVMe M.2. Ideal para upgrades de PC com alto desempenho e baixo custo.",
  price: 210.64,
  category: "Placas-mãe",
  image: "https://ae-pic-a1.aliexpress-media.com/kf/S1abb530d67844fd6a2b753fa936e6b23b.jpg",
  link: "https://s.click.aliexpress.com/e/_olEk7zR"
},
    
   {
     id: 547,
    name: "Memória DDR4 XPG Spectrix D35G, RGB, 8GB, 3200MHz, Black",
    price: 270.90,
    image: "https://down-br.img.susercontent.com/file/br-11134201-7r98o-mccksufw7m5c29.webp",
    link: "https://s.shopee.com.br/10ARDDNk3",
    description: "DDR4, 8GB, 3200MHz, CL16, RGB endereçável, dissipador de calor baixo perfil, suporte Intel XMP 2.0.",
    category: "Memória RAM"
  },
  

//Consoles
{
  id: 118,
  name: "Console Retro M8 4K com 10000 Jogos + 2 Controles Sem Fio",
  description: "Console retrô com 64GB, 2 controles sem fio 2.4GHz, suporte a saída 4K, com mais de 10.000 jogos clássicos. Ideal para presentear e reviver a nostalgia gamer.",
  price: 75.57,
  category: "Consoles",
  image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc03ed26f67f8478caf1563339c11cf24C.jpg",
  link: "https://s.click.aliexpress.com/e/_oEtEatF"
},
{
  id: 119,
  name: "Console Retro M15 4K com 30000+ Jogos + 2 Controles Sem Fio",
  description: "Console retrô M15 com 64GB, saída 4K, mais de 30.000 jogos clássicos, acompanha dois controles sem fio 2.4GHz. Ideal para diversão em família ou presente.",
  price: 128.99,
  category: "Consoles",
  image: "https://ae-pic-a1.aliexpress-media.com/kf/S4d96148c89584adfa1a6818e99b23ec6S.jpg",
  link: "https://s.click.aliexpress.com/e/_op0CCnf"
},
{
  id: 120,
  name: "Novo Smart TV Vara Android Vídeo 4K Bluetooth RK3228A Quad-Core Media Player MX10 F2",
  description: "Media player Android MX10 F2 com processador quad-core RK3228A, suporte a vídeo 4K e Bluetooth, ideal para transformar sua TV em smart com diversas funcionalidades.",
  price: 73.49,
  category: "Consoles",
  image: "https://ae-pic-a1.aliexpress-media.com/kf/S952963c823d34aef908ac7895189a290s.jpg",
  link: "https://s.click.aliexpress.com/e/_olDy07J"
},
  {
    id: 121,
    name: "Console Retro M15 4K Pro com 64GB + 30.000 Jogos",
    description: "Console M15 4K com 2 controles sem fio, 64GB de armazenamento e mais de 30.000 jogos clássicos. Conecte diretamente à TV para reviver os melhores momentos dos games retrô.",
    price: 128.99,
    category: "Consoles",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S4d96148c89584adfa1a6818e99b23ec6S.jpg",
    link: "https://s.click.aliexpress.com/e/_op0CCnf"
  },
  {
    id: 122,
    name: "VILCORN X50 MAX Console Portátil Retro",
    description: "Console portátil VILCORN X50 MAX compatível com PS1, GBA, SNES e mais. Ideal para reviver clássicos com qualidade de som e vídeo em um dispositivo compacto e moderno.",
    price: 183.42,
    category: "Consoles",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd3323ebef90146fab0e53233550a2b28k.jpg",
    link: "https://s.click.aliexpress.com/e/_onbRSW9"
  },

  //Monitores
  {
  id: 123,
  name: "Monitor Portátil ARZOPA A1 15.6\" FHD IPS",
  description: "Monitor portátil ultrafino de 15.6\" com tela IPS Full HD 1080P, corpo em liga metálica, leve e compatível com laptop, Mac, iPhone, PS5, Xbox e mais. Oferece três modos de uso: espelhamento, extensão e segunda tela. Ideal para trabalho, estudo ou entretenimento.",
  price: 679.99,
  category: "Monitores",
  image: "https://down-br.img.susercontent.com/file/cn-11134207-7ras8-mb7iup7d8vnpfc.webp",
  link: "https://s.shopee.com.br/802EKGr4Oz"
},



//Gabinetes
{
  id: 124,
  name: "Gabinete Gamer Acegeek Shield D440 Mid-Tower",
  description: "Gabinete gamer Mid-Tower com lateral em vidro temperado, suporte para placas ATX/mATX/ITX, até 7 fans, refrigeração líquida frontal 360mm, excelente gerenciamento de cabos e design robusto para setups imponentes.",
  price: 211.75,
  category: "Gabinetes",
  image: "https://down-br.img.susercontent.com/file/sg-11134201-7rdw2-m0lzv81lp5oi25.webp",
  link: "https://s.shopee.com.br/2qK8AxWh4B"
},
{
  id: 125,
  name: "Gabinete Gamer Pichau Atom X Mini-Tower",
  description: "Gabinete compacto com lateral em vidro temperado, suporte para placas M-ATX e ITX, até 7 ventoinhas, suporte para GPU até 320mm, estrutura em aço SPCC 0,4mm e design moderno para setups versáteis.",
  price: 176.46,
  category: "Gabinetes",
  image: "https://down-br.img.susercontent.com/file/sg-11134201-7rdyw-mc28nvdour408d.webp",
  link: "https://s.shopee.com.br/709h8lcllr"
},
{
  id: 126,
  name: "Gabinete Gamer Acegeek Vacancy L375 Mid-Tower Branco",
  description: "Gabinete Mid-Tower com lateral em vidro temperado branco, suporte para placas M-ATX e ITX, diversas opções de ventoinhas, suporte para water cooler lateral e superior, design espaçoso e elegante.",
  price: 235.28,
  category: "Gabinetes",
  image: "https://down-br.img.susercontent.com/file/sg-11134201-7rdvk-lzjd2ygi3y94ff.webp",
  link: "https://s.shopee.com.br/40W5ZO7mXc"
},

  




  // 7. Coolers e Refrigeração
  {
    id: 12,
    category: "Coolers e Refrigeração",
    name: "Cooler Gamer para Celular Universal – Turbo Refrigeração",
    description: "Evite superaquecimento com refrigeração turbo silenciosa! Compatível com Android e iPhone, ideal para jogos pesados. Inclui cabo USB.",
    price: 19.77,
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m9okkn45gohu99.webp",
    link: "https://s.shopee.com.br/2qJqhABGI6"
  },
  {
    id: 15,
    category: "Coolers e Refrigeração",
    name: "Suporte Base Refrigerada Notebook com 2 Coolers – até 17\"",
    description: "Refrigeração potente e silenciosa com ajuste de altura. Ideal para home office e games.",
    price: 35.97,
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lywg6tmj6kd1cb.webp",
    link: "https://s.shopee.com.br/5pxSHHbgwN"
  },
  {
    id: 16,
    category: "Coolers e Refrigeração",
    name: "Air Cooler Duplo RGB para CPU – Intel e AMD",
    description: "Refrigeração poderosa com 2 fans de 92mm e iluminação RGB. Compatível com Intel e AMD.",
    price: 55.89,
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m2sd2nohcoatc7.webp",
    link: "https://s.shopee.com.br/9ADuFYcxtv"
  },
  {
    id: 17,
    category: "Coolers e Refrigeração",
    name: "Cooler G-VR341 RGB CPU – Alumínio e Fan 2300RPM",
    description: "Alta dissipação de calor com estilo! Compatível com diversas CPUs Intel e AMD.",
    price: 51.00,
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m03dgk7rk3i52c.webp",
    link: "https://s.shopee.com.br/3Awh6ebOxJ"
  },
  {
  id: 127,
  name: "Kit Ventoinhas TGT Striker Rainbow 5x120mm",
  description: "Kit com 5 ventoinhas de 120mm com iluminação Rainbow, rolamento Hydro Bearing, silenciosas, duráveis e com fluxo de ar de 52.50 CFM para resfriamento eficiente.",
  price: 49.41,
  category: "Coolers e Refrigeração",
  image: "https://down-br.img.susercontent.com/file/sg-11134201-7rdwl-mbyawjmwdiz2c0.webp",
  link: "https://s.shopee.com.br/4ApVlmn7ns"
},
{
  id: 128,
  name: "Kit Ventoinhas Acegeek Prime ARGB 5x120mm Branco",
  description: "Kit com 5 ventoinhas Acegeek Prime ARGB, 120mm, branco, rolamento hidráulico, 1200 RPM, fluxo de ar de 55.92 CFM e baixa emissão de ruído para resfriamento eficiente.",
  price: 199.99,
  category: "Coolers e Refrigeração",
  image: "https://down-br.img.susercontent.com/file/sg-11134201-7rdwu-lztef4h6k59zec.webp",
  link: "https://s.shopee.com.br/802ELB2ozB"
},


  {
    id: 18,
    category: "Coolers e Refrigeração",
    name: "Water Cooler 240mm Rise Mode Aura Ice ARGB com Display",
    description: "Resfriamento extremo e silencioso com display de temperatura. Ideal para setups de alto desempenho.",
    price: 597.90,
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-loq2ykjm0d3p9d.webp",
    link: "https://s.shopee.com.br/5fe25LlSWP"
  },

  // 8. Acessórios
  {
    id: 9,
    category: "Acessórios",
    name: "Cabo de Rede RJ45 Ugreen Cat8 F/FTP Macho 2M Preto",
    description: "Ideal para jogos apostados! Tenha vantagem com conexão estável, ultrarrápida e sem lag. Blindagem F/FTP contra interferências, ótimo para partidas intensas no Free Fire (mobile ou emulador). Alta performance, ping baixo e durabilidade garantida.",
    price: 57.19,
    image: "https://down-br.img.susercontent.com/file/br-11134201-7r98o-ltps3wx8wg12d9.webp",
    link: "https://s.shopee.com.br/4L8ZJmldpv"
  },
  {
    id: 10,
    category: "Acessórios",
    name: "Hub USB com 4 Portas Note PC 2.0 480Mb/s AC042",
    description: "Transforme uma entrada USB do seu dispositivo em 4 com alta velocidade de transmissão. Fácil instalação Plug & Play, compatível com Windows e Mac OS. Ideal para expandir suas conexões USB rapidamente.",
    price: 29.90,
    image: "https://down-br.img.susercontent.com/file/sg-11134201-23030-jjc0upgkshovdf.webp",
    link: "https://s.shopee.com.br/qYh9z8mk7"
  },
  {
    id: 19,
    category: "Acessórios",
    name: "Suporte RGB com HUB USB para Monitor",
    description: "Aumente sua produtividade com suporte ajustável, iluminação LED RGB e HUB USB integrado. Design moderno, ergonômico e funcional.",
    price: 228.17,
    image: "https://down-br.img.susercontent.com/file/sg-11134201-7ra3q-mbauz8s56lw16c.webp",
    link: "https://s.shopee.com.br/4L8fBVnDGR"
  },

  // 9. Controles
  {
    id: 3,
    category: "Controles",
    name: "Controle PS4 Joystick Sem Fio DualShock 4",
    description: "Controle sem fio intuitivo, preciso e confortável para PS4.",
    price: 79.00,
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m6sbehdh3fqf12.webp",
    link: "https://s.shopee.com.br/7V5ZVgaU2n"
  },
  {
    id: 4,
    category: "Controles",
    name: "Controle PS5 Sem Fio Cinza Camuflado DualSense",
    description: "Sinta cada ação com resposta tátil, gatilhos adaptáveis, microfone embutido e áudio imersivo. Produto original com nota fiscal e 1 ano de garantia.",
    price: 479.00,
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m7iv6brtio981e@resize_w900_nl.webp",
    link: "https://s.shopee.com.br/9fA46V3egT"
  },

  // 10. Smartwatch
  {
    id: 11,
    category: "Smartwatch",
    name: "Smartwatch D20 Y68 Bluetooth com Monitor de Saúde",
    description: "Smartwatch com tela HD touch, conexão Bluetooth, monitor de frequência cardíaca, lembretes de chamada e funções inteligentes para sua saúde. Ideal para gamers que querem acompanhar o desempenho diário com estilo.",
    price: 69.99,
    image: "https://down-br.img.susercontent.com/file/sg-11134201-7rbk0-lqqgjmiq5mao68.webp",
    link: "https://s.shopee.com.br/9pTYiHHeQY"
  },

  // 11. Outros
  {
    id: 13,
    category: "Outros",
    name: "Grelha Fan 120mm One Piece – PC Gamer Setup",
    description: "Dê personalidade ao seu PC com grelha inspirada em One Piece. Protege a fan e melhora o visual do setup.",
    price: 14.89,
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m9jfzy436lfm56.webp",
    link: "https://s.shopee.com.br/60GsTC79dH"
  },
  {
    id: 14,
    category: "Outros",
    name: "Grelha Fan 120mm Dragon Ball Goku – PC Gamer Setup",
    description: "Estilo e proteção no seu setup com design do Goku. Encaixe fácil em fans 120mm.",
    price: 14.89,
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-ma8ov4b14p6h1b.webp",
    link: "https://s.shopee.com.br/7ASprUmIc9"
  },
];


// Categorias e lojas
const categories = [
    "Teclados", "Mouses", "Kits Gamer", "Placas de Vídeo", "Coolers e Refrigeração",
    "Gabinetes", "Placas-mãe", "Consoles", "Monitores", "Armazenamento", "Acessórios", "Fontes", "Memória RAM", "Processadores"
];

const stores = [
    { name: "Shopee", domain: "shopee.com.br" },
    { name: "Kabum", domain: "kabum.com.br" },
    { name: "AliExpress", domain: "aliexpress.com" },
    { name: "Pichau", domain: "pichau.com.br" },
    { name: "Shein", domain: "shein.com.br" }
];

// Estado da aplicação
let filteredProducts = [...products];
let selectedCategories = [];
let selectedStores = [];
let searchTerm = '';
let minPrice = '';
let maxPrice = '';
let sortBy = 'relevance';
let showOnlyOffers = false;

// Elementos DOM
const elements = {
    themeToggle: document.getElementById('theme-toggle'),
    sidebar: document.getElementById('sidebar'),
    sidebarClose: document.getElementById('sidebar-close'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileOverlay: document.getElementById('mobile-overlay'),
    searchInput: document.getElementById('search-input'),
    minPriceInput: document.getElementById('min-price'),
    maxPriceInput: document.getElementById('max-price'),
    sortSelect: document.getElementById('sort-select'),
    offersOnly: document.getElementById('offers-only'),
    categoriesFilter: document.getElementById('categories-filter'),
    storesFilter: document.getElementById('stores-filter'),
    productsGrid: document.getElementById('products-grid'),
    emptyState: document.getElementById('empty-state'),
    resultsCount: document.getElementById('results-count'),
    modalOverlay: document.getElementById('modal-overlay'),
    modalClose: document.getElementById('modal-close'),
    modalContent: document.getElementById('modal-content')
};

// Utilitários
const formatPrice = (price) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);

const getStoreFromLink = (link) => {
    if (link.includes('shopee')) return 'Shopee';
    if (link.includes('kabum')) return 'Kabum';
    if (link.includes('aliexpress')) return 'AliExpress';
    if (link.includes('pichau')) return 'Pichau';
    if (link.includes('shein')) return 'Shein';
    return 'Loja Parceira';
};

const renderStars = () => {
    return ''; // Não mostra nada
};


// Tema
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
        updateThemeIcon();
    }
};

const toggleTheme = () => {
    const isLight = document.body.classList.contains('light-theme');
    document.body.className = isLight ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', document.body.className);
    updateThemeIcon();
};

const updateThemeIcon = () => {
    const isLight = document.body.classList.contains('light-theme');
    elements.themeToggle.querySelector('i').className = isLight ? 'fas fa-moon' : 'fas fa-sun';
};

// Filtros
const initFilters = () => {
    elements.categoriesFilter.innerHTML = categories.map(c => `
        <label class="checkbox-label">
            <input type="checkbox" value="${c}" class="category-checkbox">
            <span class="checkbox-custom"></span>
            ${c}
        </label>`).join('');
    elements.storesFilter.innerHTML = stores.map(s => `
        <label class="checkbox-label">
            <input type="checkbox" value="${s.name}" class="store-checkbox">
            <span class="checkbox-custom"></span>
            ${s.name}
        </label>`).join('');

    document.querySelectorAll('.category-checkbox').forEach(cb => cb.addEventListener('change', handleCategoryChange));
    document.querySelectorAll('.store-checkbox').forEach(cb => cb.addEventListener('change', handleStoreChange));
};

const handleCategoryChange = (e) => {
    if (e.target.checked) selectedCategories.push(e.target.value);
    else selectedCategories = selectedCategories.filter(c => c !== e.target.value);
    applyFilters();
};

const handleStoreChange = (e) => {
    if (e.target.checked) selectedStores.push(e.target.value);
    else selectedStores = selectedStores.filter(s => s !== e.target.value);
    applyFilters();
};

const applyFilters = () => {
    let filtered = [...products];
    if (selectedCategories.length) filtered = filtered.filter(p => selectedCategories.includes(p.category));
    if (selectedStores.length) filtered = filtered.filter(p => selectedStores.includes(getStoreFromLink(p.link)));
    if (searchTerm) filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase()));
    if (minPrice) filtered = filtered.filter(p => p.price >= parseFloat(minPrice));
    if (maxPrice) filtered = filtered.filter(p => p.price <= parseFloat(maxPrice));
    if (showOnlyOffers) filtered = filtered.filter(p => p.isOffer);

    switch (sortBy) {
        case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
        case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
    }

    filteredProducts = filtered;
    renderProducts();
    updateResultsCount();
};

const updateResultsCount = () => {
    const count = filteredProducts.length;
    elements.resultsCount.textContent = `${count} produto${count !== 1 ? 's' : ''} encontrado${count !== 1 ? 's' : ''}`;
};

// Renderização
const renderProducts = () => {
    if (!filteredProducts.length) {
        elements.productsGrid.style.display = 'none';
        elements.emptyState.style.display = 'flex';
        return;
    }
    elements.productsGrid.style.display = 'grid';
    elements.emptyState.style.display = 'none';
    elements.productsGrid.innerHTML = filteredProducts.map(p => `
        <div class="product-card ${p.isOffer ? 'offer' : ''}" data-id="${p.id}">
            <div class="product-image" onclick="openModal(${p.id})">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-store">${getStoreFromLink(p.link)}</div>
                <h3 class="product-name" onclick="openModal(${p.id})">${p.name}</h3>
                <p class="product-description">${p.description}</p>
                <div class="product-rating"></div>
                <div class="product-price">
                    ${p.isOffer && p.originalPrice ? `<span class="original-price">${formatPrice(p.originalPrice)}</span>` : ''}
                    <span class="current-price">${formatPrice(p.price)}</span>
                </div>
                <button class="offer-btn" onclick="openAffiliate('${p.link}')"><i class="fas fa-fire"></i>Ver Oferta<i class="fas fa-external-link-alt"></i></button>
            </div>
        </div>`).join('');
};

// Modal
const openModal = (id) => {
    const p = products.find(pr => pr.id === id);
    if (!p) return;
    const discount = p.isOffer && p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
    elements.modalContent.innerHTML = `
        <div class="modal-product">
            <div class="modal-image"><img src="${p.image}" alt="${p.name}"></div>
            <div class="modal-info">
                <div class="modal-badges">
                    <span class="modal-badge store">${getStoreFromLink(p.link)}</span>
                    <span class="modal-badge category">${p.category}</span>
                </div>
                <h1 class="modal-title">${p.name}</h1>
                <p class="modal-description">${p.description}</p>
               <div class="modal-rating"></div>
                <div class="modal-price-section">
                    ${p.isOffer && p.originalPrice ? `<div class="modal-original-price"><span class="original-price">${formatPrice(p.originalPrice)}</span><span class="modal-discount">-${discount}%</span></div>` : ''}
                    <div class="modal-current-price">${formatPrice(p.price)}</div>
                    <div class="modal-installments">ou em até 12x de ${formatPrice(p.price / 12)}</div>
                </div>
                <div class="modal-actions">
                    <button class="modal-offer-btn" onclick="openAffiliate('${p.link}')"><i class="fas fa-fire"></i>Ver Oferta na ${getStoreFromLink(p.link)}<i class="fas fa-external-link-alt"></i></button>
                </div>
            </div>
        </div>`;
    elements.modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    elements.modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
};

const openAffiliate = (link) => window.open(link, '_blank', 'noopener,noreferrer');

// Sidebar mobile
const toggleSidebar = () => {
    elements.sidebar.classList.toggle('active');
    elements.mobileOverlay.classList.toggle('active');
    document.body.style.overflow = elements.sidebar.classList.contains('active') ? 'hidden' : '';
};

const closeSidebar = () => {
    elements.sidebar.classList.remove('active');
    elements.mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
};

// Event listeners
const initEventListeners = () => {
    elements.themeToggle.addEventListener('click', toggleTheme);
    elements.mobileMenuBtn.addEventListener('click', toggleSidebar);
    elements.sidebarClose.addEventListener('click', closeSidebar);
    elements.mobileOverlay.addEventListener('click', closeSidebar);
    elements.searchInput.addEventListener('input', (e) => { searchTerm = e.target.value; applyFilters(); });
    elements.minPriceInput.addEventListener('input', (e) => { minPrice = e.target.value; applyFilters(); });
    elements.maxPriceInput.addEventListener('input', (e) => { maxPrice = e.target.value; applyFilters(); });
    elements.sortSelect.addEventListener('change', (e) => { sortBy = e.target.value; applyFilters(); });
    elements.offersOnly.addEventListener('change', (e) => { showOnlyOffers = e.target.checked; applyFilters(); });
    elements.modalClose.addEventListener('click', closeModal);
    elements.modalOverlay.addEventListener('click', (e) => { if (e.target === elements.modalOverlay) closeModal(); });
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 't') { e.preventDefault(); toggleTheme(); }
        if (e.key === 'Escape') { closeModal(); closeSidebar(); }
    });
    window.addEventListener('resize', () => { if (window.innerWidth > 1024) closeSidebar(); });
};

// Inicialização
const init = () => {
    initTheme();
    initFilters();
    initEventListeners();
    renderProducts();
    updateResultsCount();
};

document.addEventListener('DOMContentLoaded', init);
