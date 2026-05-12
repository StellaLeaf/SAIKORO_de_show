// src/data/routes.js
// ============================================================
// ルートデータ
// 出発地 × サイコロの目 → 行き先＋手段のセット
//
// 変更点：
//   - 1サイコロで行き先と手段が同時に決まる構造に
//   - commentフィールドを追加（ボード上のキャッチコピー）
// ============================================================

export const ROUTES = [

  // ============================================================
  // 東京発
  // ============================================================
  { id:"TYO-1", origin:"東京", diceNum:1, destination:"札幌",   destinationKana:"さっぽろ",    prefecture:"北海道",   region:"北海道",   lat:43.0642, lng:141.3469, transportId:1, comment:"とりあえず北へ向かう",         defunct:false, defunctNote:null },
  { id:"TYO-2", origin:"東京", diceNum:2, destination:"仙台",   destinationKana:"せんだい",    prefecture:"宮城県",   region:"東北",     lat:38.2688, lng:140.8721, transportId:2, comment:"新幹線でサクッと東北へ",        defunct:false, defunctNote:null },
  { id:"TYO-3", origin:"東京", diceNum:3, destination:"大阪",   destinationKana:"おおさか",    prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:3, comment:"深夜バスで関西へ",              defunct:false, defunctNote:null },
  { id:"TYO-4", origin:"東京", diceNum:4, destination:"苫小牧", destinationKana:"とまこまい",  prefecture:"北海道",   region:"北海道",   lat:42.6333, lng:141.6044, transportId:4, comment:"太平洋をひと晩かけて渡る",      defunct:false, defunctNote:null },
  { id:"TYO-5", origin:"東京", diceNum:5, destination:"出雲市", destinationKana:"いずもし",    prefecture:"島根県",   region:"中国",     lat:35.3670, lng:132.7550, transportId:5, comment:"サンライズで縁結びの地へ",      defunct:false, defunctNote:null },
  { id:"TYO-6", origin:"東京", diceNum:6, destination:"博多",   destinationKana:"はかた",      prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:2, comment:"この際遠くへ 新幹線で一気に",   defunct:false, defunctNote:null },

  // ============================================================
  // 大阪発
  // ============================================================
  { id:"OSA-1", origin:"大阪", diceNum:1, destination:"金沢",   destinationKana:"かなざわ",    prefecture:"石川県",   region:"北陸",     lat:36.5944, lng:136.6256, transportId:6, comment:"特急サンダーバードで一気に",    defunct:false, defunctNote:null },
  { id:"OSA-2", origin:"大阪", diceNum:2, destination:"敦賀",   destinationKana:"つるが",      prefecture:"福井県",   region:"北陸",     lat:35.6500, lng:136.0667, transportId:6, comment:"ちょっとでも戻りたい",          defunct:false, defunctNote:null },
  { id:"OSA-3", origin:"大阪", diceNum:3, destination:"城崎温泉",destinationKana:"きのさきおんせん",prefecture:"兵庫県",region:"近畿",    lat:35.6244, lng:134.8069, transportId:6, comment:"ひとっ風呂浴びたい",            defunct:false, defunctNote:null },
  { id:"OSA-4", origin:"大阪", diceNum:4, destination:"日間賀島",destinationKana:"ひまかじま",  prefecture:"愛知県",  region:"東海",     lat:34.8667, lng:136.9000, transportId:4, comment:"太平洋の謎の島",                defunct:false, defunctNote:null },
  { id:"OSA-5", origin:"大阪", diceNum:5, destination:"高松",   destinationKana:"たかまつ",    prefecture:"香川県",   region:"四国",     lat:34.3428, lng:134.0462, transportId:4, comment:"ついに上陸 四国",               defunct:false, defunctNote:null },
  { id:"OSA-6", origin:"大阪", diceNum:6, destination:"博多",   destinationKana:"はかた",      prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:3, comment:"この際遠くへ 深夜バスで行く",   defunct:false, defunctNote:null },

  // ============================================================
  // 札幌発
  // ============================================================
  { id:"SAP-1", origin:"札幌", diceNum:1, destination:"稚内",   destinationKana:"わっかない",  prefecture:"北海道",   region:"北海道",   lat:45.4161, lng:141.6733, transportId:6, comment:"日本最北端を目指す",            defunct:false, defunctNote:null },
  { id:"SAP-2", origin:"札幌", diceNum:2, destination:"網走",   destinationKana:"あばしり",    prefecture:"北海道",   region:"北海道",   lat:44.0208, lng:144.2742, transportId:6, comment:"オホーツクの海へ",              defunct:false, defunctNote:null },
  { id:"SAP-3", origin:"札幌", diceNum:3, destination:"函館",   destinationKana:"はこだて",    prefecture:"北海道",   region:"北海道",   lat:41.7686, lng:140.7288, transportId:6, comment:"道南へ特急で南下",              defunct:false, defunctNote:null },
  { id:"SAP-4", origin:"札幌", diceNum:4, destination:"大洗",   destinationKana:"おおあらい",  prefecture:"茨城県",   region:"関東",     lat:36.3133, lng:140.5753, transportId:4, comment:"太平洋フェリーで本州へ",        defunct:false, defunctNote:null },
  { id:"SAP-5", origin:"札幌", diceNum:5, destination:"釧路",   destinationKana:"くしろ",      prefecture:"北海道",   region:"北海道",   lat:42.9849, lng:144.3820, transportId:6, comment:"湿原の街へ特急おおぞら",        defunct:false, defunctNote:null },
  { id:"SAP-6", origin:"札幌", diceNum:6, destination:"東京",   destinationKana:"とうきょう",  prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:1, comment:"飛行機で一気に本州へ",          defunct:false, defunctNote:null },

  // ============================================================
  // 福岡発
  // ============================================================
  { id:"FUK-1", origin:"福岡", diceNum:1, destination:"長崎",   destinationKana:"ながさき",    prefecture:"長崎県",   region:"九州沖縄", lat:32.7448, lng:129.8737, transportId:6, comment:"九州西端へ特急かもめ",          defunct:false, defunctNote:null },
  { id:"FUK-2", origin:"福岡", diceNum:2, destination:"鹿児島", destinationKana:"かごしま",    prefecture:"鹿児島県", region:"九州沖縄", lat:31.5966, lng:130.5571, transportId:2, comment:"九州新幹線で南へ一直線",        defunct:false, defunctNote:null },
  { id:"FUK-3", origin:"福岡", diceNum:3, destination:"沖縄",   destinationKana:"おきなわ",    prefecture:"沖縄県",   region:"九州沖縄", lat:26.2124, lng:127.6809, transportId:1, comment:"南国へ飛んでしまおう",          defunct:false, defunctNote:null },
  { id:"FUK-4", origin:"福岡", diceNum:4, destination:"大分",   destinationKana:"おおいた",    prefecture:"大分県",   region:"九州沖縄", lat:33.2382, lng:131.6126, transportId:6, comment:"温泉天国へ特急ソニック",        defunct:false, defunctNote:null },
  { id:"FUK-5", origin:"福岡", diceNum:5, destination:"大阪",   destinationKana:"おおさか",    prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:4, comment:"夜の海を渡って関西へ",          defunct:false, defunctNote:null },
  { id:"FUK-6", origin:"福岡", diceNum:6, destination:"東京",   destinationKana:"とうきょう",  prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:2, comment:"この際遠くへ 新幹線で全力北上", defunct:false, defunctNote:null },

  // ============================================================
  // 名古屋発
  // ============================================================
  { id:"NGO-1", origin:"名古屋", diceNum:1, destination:"富山",   destinationKana:"とやま",    prefecture:"富山県",   region:"北陸",     lat:36.6953, lng:137.2113, transportId:6, comment:"特急ひだで山越え",              defunct:false, defunctNote:null },
  { id:"NGO-2", origin:"名古屋", diceNum:2, destination:"仙台",   destinationKana:"せんだい",  prefecture:"宮城県",   region:"東北",     lat:38.2688, lng:140.8721, transportId:3, comment:"深夜バスで東北へ",              defunct:false, defunctNote:null },
  { id:"NGO-3", origin:"名古屋", diceNum:3, destination:"苫小牧", destinationKana:"とまこまい",prefecture:"北海道",   region:"北海道",   lat:42.6333, lng:141.6044, transportId:4, comment:"太平洋フェリーで北海道へ",      defunct:false, defunctNote:null },
  { id:"NGO-4", origin:"名古屋", diceNum:4, destination:"高松",   destinationKana:"たかまつ",  prefecture:"香川県",   region:"四国",     lat:34.3428, lng:134.0462, transportId:6, comment:"南紀経由で四国上陸",            defunct:false, defunctNote:null },
  { id:"NGO-5", origin:"名古屋", diceNum:5, destination:"出雲市", destinationKana:"いずもし",  prefecture:"島根県",   region:"中国",     lat:35.3670, lng:132.7550, transportId:5, comment:"サンライズで縁結びの地へ",      defunct:false, defunctNote:null },
  { id:"NGO-6", origin:"名古屋", diceNum:6, destination:"博多",   destinationKana:"はかた",    prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:2, comment:"この際遠くへ 新幹線で西へ",     defunct:false, defunctNote:null },
];

// ============================================================
// ユーティリティ関数
// ============================================================

// 出発地一覧を取得
export const getOrigins = () =>
  [...new Set(ROUTES.map(r => r.origin))];

// 出発地から6件のルートを取得（diceNum順）
export const getRoutesByOrigin = (origin) =>
  ROUTES
    .filter(r => r.origin === origin)
    .sort((a, b) => a.diceNum - b.diceNum);

// 出発地×サイコロの目から1件取得
export const getRoute = (origin, diceNum) =>
  ROUTES.find(r => r.origin === origin && r.diceNum === diceNum);