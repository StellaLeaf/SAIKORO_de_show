// ============================================================
// 自作ルートデータ（手動メンテナンス）
// ============================================================
export const ROUTES_MANUAL = [

  // ============================================================
  // 東京発
  // ============================================================
  { id:1,  seriesId:"manual", origin:"東京",   destination:"札幌",   prefecture:"北海道",   region:"北海道",   lat:43.0642, lng:141.3469, transportId:1, comment:"とりあえず北へ向かう",         defunct:false, defunctNote:null },
  { id:2,  seriesId:"manual", origin:"東京",   destination:"仙台",   prefecture:"宮城県",   region:"東北",     lat:38.2688, lng:140.8721, transportId:2, comment:"新幹線でサクッと東北へ",       defunct:false, defunctNote:null },
  { id:3,  seriesId:"manual", origin:"東京",   destination:"大阪",   prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:3, comment:"深夜バスで関西へ",             defunct:false, defunctNote:null },
  { id:4,  seriesId:"manual", origin:"東京",   destination:"苫小牧", prefecture:"北海道",   region:"北海道",   lat:42.6333, lng:141.6044, transportId:4, comment:"太平洋をひと晩かけて渡る",     defunct:false, defunctNote:null },
  { id:5,  seriesId:"manual", origin:"東京",   destination:"出雲市", prefecture:"島根県",   region:"中国",     lat:35.3670, lng:132.7550, transportId:5, comment:"サンライズで縁結びの地へ",     defunct:false, defunctNote:null },
  { id:6,  seriesId:"manual", origin:"東京",   destination:"博多",   prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:2, comment:"この際遠くへ 新幹線で一気に",  defunct:false, defunctNote:null },

  // ============================================================
  // 大阪発
  // ============================================================
  { id:7,  seriesId:"manual", origin:"大阪",   destination:"金沢",     prefecture:"石川県",   region:"北陸",     lat:36.5944, lng:136.6256, transportId:6, comment:"特急サンダーバードで一気に",   defunct:false, defunctNote:null },
  { id:8,  seriesId:"manual", origin:"大阪",   destination:"敦賀",     prefecture:"福井県",   region:"北陸",     lat:35.6500, lng:136.0667, transportId:6, comment:"ちょっとでも戻りたい",         defunct:false, defunctNote:null },
  { id:9,  seriesId:"manual", origin:"大阪",   destination:"城崎温泉", prefecture:"兵庫県",   region:"近畿",     lat:35.6244, lng:134.8069, transportId:6, comment:"ひとっ風呂浴びたい",           defunct:false, defunctNote:null },
  { id:10, seriesId:"manual", origin:"大阪",   destination:"日間賀島", prefecture:"愛知県",   region:"東海",     lat:34.8667, lng:136.9000, transportId:4, comment:"太平洋の謎の島",               defunct:false, defunctNote:null },
  { id:11, seriesId:"manual", origin:"大阪",   destination:"高松",     prefecture:"香川県",   region:"四国",     lat:34.3428, lng:134.0462, transportId:4, comment:"ついに上陸 四国",              defunct:false, defunctNote:null },
  { id:12, seriesId:"manual", origin:"大阪",   destination:"博多",     prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:3, comment:"この際遠くへ 深夜バスで行く",  defunct:false, defunctNote:null },

  // ============================================================
  // 札幌発
  // ============================================================
  { id:13, seriesId:"manual", origin:"札幌",   destination:"稚内",   prefecture:"北海道",   region:"北海道",   lat:45.4161, lng:141.6733, transportId:6, comment:"日本最北端を目指す",           defunct:false, defunctNote:null },
  { id:14, seriesId:"manual", origin:"札幌",   destination:"網走",   prefecture:"北海道",   region:"北海道",   lat:44.0208, lng:144.2742, transportId:6, comment:"オホーツクの海へ",             defunct:false, defunctNote:null },
  { id:15, seriesId:"manual", origin:"札幌",   destination:"函館",   prefecture:"北海道",   region:"北海道",   lat:41.7686, lng:140.7288, transportId:6, comment:"道南へ特急で南下",             defunct:false, defunctNote:null },
  { id:16, seriesId:"manual", origin:"札幌",   destination:"大洗",   prefecture:"茨城県",   region:"関東",     lat:36.3133, lng:140.5753, transportId:4, comment:"太平洋フェリーで本州へ",       defunct:false, defunctNote:null },
  { id:17, seriesId:"manual", origin:"札幌",   destination:"釧路",   prefecture:"北海道",   region:"北海道",   lat:42.9849, lng:144.3820, transportId:6, comment:"湿原の街へ特急おおぞら",       defunct:false, defunctNote:null },
  { id:18, seriesId:"manual", origin:"札幌",   destination:"東京",   prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:1, comment:"飛行機で一気に本州へ",         defunct:false, defunctNote:null },

  // ============================================================
  // 福岡発
  // ============================================================
  { id:19, seriesId:"manual", origin:"福岡",   destination:"長崎",   prefecture:"長崎県",   region:"九州沖縄", lat:32.7448, lng:129.8737, transportId:6, comment:"九州西端へ特急かもめ",         defunct:false, defunctNote:null },
  { id:20, seriesId:"manual", origin:"福岡",   destination:"鹿児島", prefecture:"鹿児島県", region:"九州沖縄", lat:31.5966, lng:130.5571, transportId:2, comment:"九州新幹線で南へ一直線",       defunct:false, defunctNote:null },
  { id:21, seriesId:"manual", origin:"福岡",   destination:"沖縄",   prefecture:"沖縄県",   region:"九州沖縄", lat:26.2124, lng:127.6809, transportId:1, comment:"南国へ飛んでしまおう",         defunct:false, defunctNote:null },
  { id:22, seriesId:"manual", origin:"福岡",   destination:"大分",   prefecture:"大分県",   region:"九州沖縄", lat:33.2382, lng:131.6126, transportId:6, comment:"温泉天国へ特急ソニック",       defunct:false, defunctNote:null },
  { id:23, seriesId:"manual", origin:"福岡",   destination:"大阪",   prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:4, comment:"夜の海を渡って関西へ",         defunct:false, defunctNote:null },
  { id:24, seriesId:"manual", origin:"福岡",   destination:"東京",   prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:2, comment:"この際遠くへ 新幹線で全力北上", defunct:false, defunctNote:null },

  // ============================================================
  // 名古屋発
  // ============================================================
  { id:25, seriesId:"manual", origin:"名古屋", destination:"富山",   prefecture:"富山県",   region:"北陸",     lat:36.6953, lng:137.2113, transportId:6, comment:"特急ひだで山越え",             defunct:false, defunctNote:null },
  { id:26, seriesId:"manual", origin:"名古屋", destination:"仙台",   prefecture:"宮城県",   region:"東北",     lat:38.2688, lng:140.8721, transportId:3, comment:"深夜バスで東北へ",             defunct:false, defunctNote:null },
  { id:27, seriesId:"manual", origin:"名古屋", destination:"苫小牧", prefecture:"北海道",   region:"北海道",   lat:42.6333, lng:141.6044, transportId:4, comment:"太平洋フェリーで北海道へ",     defunct:false, defunctNote:null },
  { id:28, seriesId:"manual", origin:"名古屋", destination:"高松",   prefecture:"香川県",   region:"四国",     lat:34.3428, lng:134.0462, transportId:6, comment:"南紀経由で四国上陸",           defunct:false, defunctNote:null },
  { id:29, seriesId:"manual", origin:"名古屋", destination:"出雲市", prefecture:"島根県",   region:"中国",     lat:35.3670, lng:132.7550, transportId:5, comment:"サンライズで縁結びの地へ",     defunct:false, defunctNote:null },
  { id:30, seriesId:"manual", origin:"名古屋", destination:"博多",   prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:2, comment:"この際遠くへ 新幹線で西へ",    defunct:false, defunctNote:null },

  // ============================================================
  // 仙台発
  // ============================================================
  { id:31, seriesId:"manual", origin:"仙台",   destination:"青森",   prefecture:"青森県",   region:"東北",     lat:40.8246, lng:140.7406, transportId:2, comment:"はやぶさでさらに北へ",         defunct:false, defunctNote:null },
  { id:32, seriesId:"manual", origin:"仙台",   destination:"山形",   prefecture:"山形県",   region:"東北",     lat:38.2405, lng:140.3634, transportId:6, comment:"仙山線でのんびりお隣へ",       defunct:false, defunctNote:null },
  { id:33, seriesId:"manual", origin:"仙台",   destination:"新潟",   prefecture:"新潟県",   region:"甲信越",   lat:37.9161, lng:139.0364, transportId:3, comment:"深夜バスで日本海側へ",         defunct:false, defunctNote:null },
  { id:34, seriesId:"manual", origin:"仙台",   destination:"苫小牧", prefecture:"北海道",   region:"北海道",   lat:42.6333, lng:141.6044, transportId:4, comment:"太平洋フェリーで北海道上陸",   defunct:false, defunctNote:null },
  { id:35, seriesId:"manual", origin:"仙台",   destination:"大阪",   prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:1, comment:"飛んで関西へ",                 defunct:false, defunctNote:null },
  { id:36, seriesId:"manual", origin:"仙台",   destination:"東京",   prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:2, comment:"はやぶさで一気に南下",         defunct:false, defunctNote:null },

  // ============================================================
  // 広島発
  // ============================================================
  { id:37, seriesId:"manual", origin:"広島",   destination:"松山",   prefecture:"愛媛県",   region:"四国",     lat:33.8416, lng:132.7657, transportId:4, comment:"瀬戸内海を渡って四国へ",       defunct:false, defunctNote:null },
  { id:38, seriesId:"manual", origin:"広島",   destination:"博多",   prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:2, comment:"のぞみで九州入り",             defunct:false, defunctNote:null },
  { id:39, seriesId:"manual", origin:"広島",   destination:"出雲市", prefecture:"島根県",   region:"中国",     lat:35.3670, lng:132.7550, transportId:3, comment:"高速バスで神話の国へ",         defunct:false, defunctNote:null },
  { id:40, seriesId:"manual", origin:"広島",   destination:"大阪",   prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:2, comment:"のぞみで東へ戻る",             defunct:false, defunctNote:null },
  { id:41, seriesId:"manual", origin:"広島",   destination:"高知",   prefecture:"高知県",   region:"四国",     lat:33.5597, lng:133.5311, transportId:3, comment:"バスで山を越えて太平洋側へ",   defunct:false, defunctNote:null },
  { id:42, seriesId:"manual", origin:"広島",   destination:"東京",   prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:1, comment:"飛行機で一気に東京へ",         defunct:false, defunctNote:null },

  // ============================================================
  // 金沢発
  // ============================================================
  { id:43, seriesId:"manual", origin:"金沢",   destination:"東京",     prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:2, comment:"北陸新幹線で一気に東京へ",     defunct:false, defunctNote:null },
  { id:44, seriesId:"manual", origin:"金沢",   destination:"京都",     prefecture:"京都府",   region:"近畿",     lat:34.9858, lng:135.7588, transportId:6, comment:"特急サンダーバードで古都へ",   defunct:false, defunctNote:null },
  { id:45, seriesId:"manual", origin:"金沢",   destination:"高山",     prefecture:"岐阜県",   region:"東海",     lat:36.1461, lng:137.2523, transportId:3, comment:"バスで飛騨の山奥へ",           defunct:false, defunctNote:null },
  { id:46, seriesId:"manual", origin:"金沢",   destination:"和倉温泉", prefecture:"石川県",   region:"北陸",     lat:37.0606, lng:136.9056, transportId:6, comment:"特急で能登の温泉郷へ",         defunct:false, defunctNote:null },
  { id:47, seriesId:"manual", origin:"金沢",   destination:"大阪",     prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:3, comment:"深夜バスで関西へ",             defunct:false, defunctNote:null },
  { id:48, seriesId:"manual", origin:"金沢",   destination:"福岡",     prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:1, comment:"小松空港から飛んで九州へ",     defunct:false, defunctNote:null },
];