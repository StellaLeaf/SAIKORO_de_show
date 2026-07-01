// ============================================================
// 本家サイコロの旅データ
// 番組内で実際に使われたサイコロボード（saikoro1, saikoro2...）
// 廃止情報は調査済み。要更新時はここに反映。
// ============================================================
export const ROUTES_ORIGINAL = [
  // ============================================================
  // Leg 1-1  東京発
  // ============================================================
  { id:1,  seriesId:"saikoro1", origin:"東京",   destination:"青森",         prefecture:"青森県",   region:"東北",     lat:40.8246, lng:140.7406, transportId:3, comment:"ラ・フォーレ",                       defunct:false,  defunctNote:null},
  { id:2,  seriesId:"saikoro1", origin:"東京",   destination:"新潟",         prefecture:"新潟県",   region:"甲信越",   lat:37.9161, lng:139.0364, transportId:3, comment:"Weライナー",                         defunct:false, defunctNote:null },
  { id:3,  seriesId:"saikoro1", origin:"東京",   destination:"松山",         prefecture:"愛媛県",   region:"四国",     lat:33.8416, lng:132.7657, transportId:3, comment:"オレンジライナー",                   defunct:false, defunctNote:null },
  { id:4,  seriesId:"saikoro1", origin:"東京",   destination:"盛岡",         prefecture:"岩手県",   region:"東北",     lat:39.7036, lng:141.1527, transportId:3, comment:"らくちん",                           defunct:true,  defunctNote:"2021年運休。代替は「ドリーム青森/盛岡・東京号」が盛岡経由で現存" },
  { id:5,  seriesId:"saikoro1", origin:"東京",   destination:"下関",         prefecture:"山口県",   region:"中国",     lat:33.9508, lng:130.9264, transportId:3, comment:"ドリームふくふく",                   defunct:true,  defunctNote:"2006年廃止。代替は大阪発を推奨" },
  { id:6,  seriesId:"saikoro1", origin:"東京",   destination:"羽田",         prefecture:"東京都",   region:"関東",     lat:35.5494, lng:139.7798, transportId:3, comment:"エアポートリムジン",                 defunct:false, defunctNote:null },

  // ============================================================
  // Leg 1-2  松山発
  // ============================================================
  { id:7,  seriesId:"saikoro1", origin:"松山",   destination:"千歳",         prefecture:"北海道",   region:"北海道",   lat:42.8233, lng:141.6511, transportId:1, comment:"夢の直行便",                         defunct:false, defunctNote:null },
  { id:8,  seriesId:"saikoro1", origin:"松山",   destination:"下関",         prefecture:"山口県",   region:"中国",     lat:33.9508, lng:130.9264, transportId:6, comment:"ふぐが食べたい!",                    defunct:false, defunctNote:null },
  { id:9,  seriesId:"saikoro1", origin:"松山",   destination:"東京",         prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:3, comment:"ふりだしに戻る",                     defunct:false, defunctNote:null },
  { id:10, seriesId:"saikoro1", origin:"松山",   destination:"小豆島",       prefecture:"香川県",   region:"四国",     lat:34.4833, lng:134.2333, transportId:4, comment:"魅惑のアイランド",                   defunct:false, defunctNote:null },
  { id:11, seriesId:"saikoro1", origin:"松山",   destination:"鹿児島",       prefecture:"鹿児島県", region:"九州沖縄", lat:31.5966, lng:130.5571, transportId:2, comment:"同じ島でもこれは遠いぞ",             defunct:false, defunctNote:null },
  { id:12, seriesId:"saikoro1", origin:"松山",   destination:"臼杵",         prefecture:"大分県",   region:"九州沖縄", lat:33.1261, lng:131.8047, transportId:4, comment:"謎のまち",                           defunct:false, defunctNote:null },

  // ============================================================
  // Leg 1-3  臼杵発
  // ============================================================
  { id:13, seriesId:"saikoro1", origin:"臼杵",   destination:"千歳",         prefecture:"北海道",   region:"北海道",   lat:42.8233, lng:141.6511, transportId:1, comment:"夢の直行便",                         defunct:false, defunctNote:null },
  { id:14, seriesId:"saikoro1", origin:"臼杵",   destination:"別府温泉",     prefecture:"大分県",   region:"九州沖縄", lat:33.2846, lng:131.5006, transportId:7, comment:"一回休み",                           defunct:false, defunctNote:null },
  { id:15, seriesId:"saikoro1", origin:"臼杵",   destination:"名古屋",       prefecture:"愛知県",   region:"東海",     lat:35.1815, lng:136.9066, transportId:3, comment:"地獄の深夜バス「ぶんご号」",         defunct:true,  defunctNote:"2016年廃止。代替は大分発大阪行を推奨" },
  { id:16, seriesId:"saikoro1", origin:"臼杵",   destination:"東京",         prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:5, comment:"ふりだしに戻る",                     defunct:true,  defunctNote:"九州発着の寝台列車は全廃" },
  { id:17, seriesId:"saikoro1", origin:"臼杵",   destination:"小倉",         prefecture:"福岡県",   region:"九州沖縄", lat:33.8834, lng:130.8752, transportId:6, comment:"まだまだ九州",                       defunct:false, defunctNote:null },
  { id:18, seriesId:"saikoro1", origin:"臼杵",   destination:"鹿児島",       prefecture:"鹿児島県", region:"九州沖縄", lat:31.5966, lng:130.5571, transportId:6, comment:"たっぷり九州",                       defunct:false, defunctNote:null },

  // ============================================================
  // Leg 1-4  小倉発
  // ============================================================
  { id:19, seriesId:"saikoro1", origin:"小倉",   destination:"東京",           prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:5, comment:"ふりだしに戻る",                   defunct:true,  defunctNote:"九州発着の寝台列車は全廃" },
  { id:20, seriesId:"saikoro1", origin:"小倉",   destination:"出雲",           prefecture:"島根県",   region:"中国",     lat:35.3670, lng:132.7550, transportId:6, comment:"未知のまち",                       defunct:false, defunctNote:null },
  { id:21, seriesId:"saikoro1", origin:"小倉",   destination:"名古屋",         prefecture:"愛知県",   region:"東海",     lat:35.1815, lng:136.9066, transportId:3, comment:"地獄の深夜バス「げんかい号」",     defunct:true,  defunctNote:"1997年廃止。代替は「どんたく号」が小倉経由で現存" },
  { id:22, seriesId:"saikoro1", origin:"小倉",   destination:"小倉東急イン",   prefecture:"福岡県",   region:"九州沖縄", lat:33.8834, lng:130.8752, transportId:7, comment:"スタッフも疲れたここで一泊",       defunct:false, defunctNote:null },
  { id:23, seriesId:"saikoro1", origin:"小倉",   destination:"大阪",           prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:2, comment:"案外いいかも",                     defunct:false, defunctNote:null },
  { id:24, seriesId:"saikoro1", origin:"小倉",   destination:"千歳",           prefecture:"北海道",   region:"北海道",   lat:42.8233, lng:141.6511, transportId:1, comment:"夢の福岡発最終便",                 defunct:false, defunctNote:null },

  // ============================================================
  // Leg 1-5  新大阪発
  // ============================================================
  { id:25, seriesId:"saikoro1", origin:"新大阪", destination:"東京",           prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:5, comment:"寝台特急「あさかぜ」",             defunct:true,  defunctNote:"2005年廃止" },
  { id:26, seriesId:"saikoro1", origin:"新大阪", destination:"新潟",           prefecture:"新潟県",   region:"甲信越",   lat:37.9161, lng:139.0364, transportId:5, comment:"寝台急行「きたぐに」",             defunct:true,  defunctNote:"2013年廃止" },
  { id:27, seriesId:"saikoro1", origin:"新大阪", destination:"長野",           prefecture:"長野県",   region:"甲信越",   lat:36.6513, lng:138.1810, transportId:3, comment:"深夜バス「アルペン」",             defunct:false, defunctNote:null },
  { id:28, seriesId:"saikoro1", origin:"新大阪", destination:"梅田阪急ホテル", prefecture:"大阪府",   region:"近畿",     lat:34.7055, lng:135.4983, transportId:7, comment:"頼むから出して",                   defunct:false, defunctNote:null },
  { id:29, seriesId:"saikoro1", origin:"新大阪", destination:"千歳",           prefecture:"北海道",   region:"北海道",   lat:42.8233, lng:141.6511, transportId:1, comment:"直行便",                           defunct:false, defunctNote:null },
  { id:30, seriesId:"saikoro1", origin:"新大阪", destination:"名古屋",         prefecture:"愛知県",   region:"東海",     lat:35.1815, lng:136.9066, transportId:2, comment:"始発待ちます新幹線",               defunct:false, defunctNote:null },

  // ============================================================
  // Leg 1-6  新潟発（ゴール目前）
  // ============================================================
  { id:31, seriesId:"saikoro1", origin:"新潟",   destination:"東京",   prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:2, comment:"ふりだしに戻る",                     defunct:false, defunctNote:null },
  { id:32, seriesId:"saikoro1", origin:"新潟",   destination:"金沢",   prefecture:"石川県",   region:"北陸",     lat:36.5944, lng:136.6256, transportId:6, comment:"寝台急行「きたぐに」",               defunct:true,  defunctNote:"2012年廃止" },
  { id:33, seriesId:"saikoro1", origin:"新潟",   destination:"山形",   prefecture:"山形県",   region:"東北",     lat:38.2405, lng:140.3634, transportId:6, comment:"ちょっと進む",                       defunct:false, defunctNote:null },
  { id:34, seriesId:"saikoro1", origin:"新潟",   destination:"仙台",   prefecture:"宮城県",   region:"東北",     lat:38.2688, lng:140.8721, transportId:2, comment:"太平洋を見よう",                     defunct:false, defunctNote:null },
  { id:35, seriesId:"saikoro1", origin:"新潟",   destination:"青森",   prefecture:"青森県",   region:"東北",     lat:40.8246, lng:140.7406, transportId:2, comment:"北海道はすぐそこ",                   defunct:false, defunctNote:null },
  { id:36, seriesId:"saikoro1", origin:"新潟",   destination:"北海道", prefecture:"北海道",   region:"北海道",   lat:43.1907, lng:140.9947, transportId:4, comment:"いよいよ上陸、一気に北海道",         defunct:false, defunctNote:null },
// ============================================================
  // ■ サイコロの旅2（途中：Leg 2-1 〜 2-4）
  // ============================================================

  // ============================================================
  // Leg 2-1  東京発
  // ============================================================
  { id:37, seriesId:"saikoro2", origin:"東京",    destination:"釜石",   prefecture:"岩手県",   region:"東北",     lat:39.2757, lng:141.8858, transportId:3, comment:"深夜バス「けせんライナー」",         defunct:false, defunctNote:null },
  { id:38, seriesId:"saikoro2", origin:"東京",    destination:"花巻",   prefecture:"岩手県",   region:"東北",     lat:39.3886, lng:141.1170, transportId:3, comment:"深夜バス「イーハートーブ号」",       defunct:true, defunctNote:"2024年運行終了。代替は北上経由のバスを推奨" },
  { id:39, seriesId:"saikoro2", origin:"東京",    destination:"徳島",   prefecture:"徳島県",   region:"四国",     lat:34.0658, lng:134.5593, transportId:3, comment:"深夜バス「エディー号」",             defunct:false, defunctNote:null},
  { id:40, seriesId:"saikoro2", origin:"東京",    destination:"千歳",   prefecture:"北海道",   region:"北海道",   lat:42.8233, lng:141.6511, transportId:1, comment:"JALで行く夢の直行便",                defunct:false, defunctNote:null },
  { id:41, seriesId:"saikoro2", origin:"東京",    destination:"神戸",   prefecture:"兵庫県",   region:"近畿",     lat:34.6901, lng:135.1956, transportId:2, comment:"新幹線グリーン車で行く",             defunct:false, defunctNote:null },
  { id:42, seriesId:"saikoro2", origin:"東京",    destination:"苫小牧", prefecture:"北海道",   region:"北海道",   lat:42.6333, lng:141.6044, transportId:4, comment:"30時間フェリーの旅",                 defunct:false, defunctNote:null },

  // ============================================================
  // Leg 2-2  神戸発（全目バス）
  // ============================================================
  { id:43, seriesId:"saikoro2", origin:"神戸",    destination:"徳島",   prefecture:"徳島県",   region:"四国",     lat:34.0658, lng:134.5593, transportId:3, comment:"サラダエクスプレス",                 defunct:false, defunctNote:null },
  { id:44, seriesId:"saikoro2", origin:"神戸",    destination:"高知",   prefecture:"高知県",   region:"四国",     lat:33.5597, lng:133.5311, transportId:3, comment:"よさこい号",                         defunct:false, defunctNote:null },
  { id:45, seriesId:"saikoro2", origin:"神戸",    destination:"熊本",   prefecture:"熊本県",   region:"九州沖縄", lat:32.7898, lng:130.7417, transportId:3, comment:"レッツ号",                           defunct:false, defunctNote:null },
  { id:46, seriesId:"saikoro2", origin:"神戸",    destination:"東京",   prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:3, comment:"プリンセスロード",                   defunct:false, defunctNote:null },
  { id:47, seriesId:"saikoro2", origin:"神戸",    destination:"下関",   prefecture:"山口県",   region:"中国",     lat:33.9508, lng:130.9264, transportId:3, comment:"ふくふく号",                         defunct:false, defunctNote:null},
  { id:48, seriesId:"saikoro2", origin:"神戸",    destination:"東京",   prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:3, comment:"ドリーム神戸号",                     defunct:false, defunctNote:null },

  // ============================================================
  // Leg 2-3  熊本発
  // ============================================================
  { id:49, seriesId:"saikoro2", origin:"熊本",    destination:"千歳",   prefecture:"北海道",   region:"北海道",   lat:42.8233, lng:141.6511, transportId:1, comment:"夢の直行便",                         defunct:false, defunctNote:null },
  { id:50, seriesId:"saikoro2", origin:"熊本",    destination:"宿毛",   prefecture:"高知県",   region:"四国",     lat:32.9383, lng:132.7264, transportId:4, comment:"読み方がわからん",                   defunct:true, defunctNote:"2019年運行再開断念。代替手段なし" },
  { id:51, seriesId:"saikoro2", origin:"熊本",    destination:"牛深",   prefecture:"熊本県",   region:"九州沖縄", lat:32.2014, lng:130.0283, transportId:3, comment:"それは、どこ？",                     defunct:false, defunctNote:null },
  { id:52, seriesId:"saikoro2", origin:"熊本",    destination:"博多",   prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:6, comment:"ちょっとでも戻りたい",               defunct:false, defunctNote:null },
  { id:53, seriesId:"saikoro2", origin:"熊本",    destination:"広島",   prefecture:"広島県",   region:"中国",     lat:34.3853, lng:132.4553, transportId:2, comment:"もう少し戻りたい",                   defunct:false, defunctNote:null },
  { id:54, seriesId:"saikoro2", origin:"熊本",    destination:"鹿児島", prefecture:"鹿児島県", region:"九州沖縄", lat:31.5966, lng:130.5571, transportId:6, comment:"このさい遠くへ",                     defunct:false, defunctNote:null },

  // ============================================================
  // Leg 2-4  宿毛発
  // ============================================================
  { id:55, seriesId:"saikoro2", origin:"宿毛",    destination:"別府",   prefecture:"大分県",   region:"九州沖縄", lat:33.2846, lng:131.5006, transportId:4, comment:"九州へ戻る",                         defunct:true, defunctNote:"2019年運行再開断念。代替手段なし" },
  { id:56, seriesId:"saikoro2", origin:"宿毛",    destination:"岡山",   prefecture:"岡山県",   region:"中国",     lat:34.6617, lng:133.9350, transportId:6, comment:"本州へ戻る",                         defunct:false, defunctNote:null },
  { id:57, seriesId:"saikoro2", origin:"宿毛",    destination:"高知",   prefecture:"高知県",   region:"四国",     lat:33.5597, lng:133.5311, transportId:6, comment:"四国を満喫",                         defunct:false, defunctNote:null },
  { id:58, seriesId:"saikoro2", origin:"宿毛",    destination:"東京",   prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:1, comment:"とっとと帰る",                       defunct:false, defunctNote:null },
  { id:59, seriesId:"saikoro2", origin:"宿毛",    destination:"大阪",   prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:4, comment:"ゆっくり帰る(10時間フェリーの旅)",   defunct:true, defunctNote:"2015年廃止。バスで代替を推奨" },
  { id:60, seriesId:"saikoro2", origin:"宿毛",    destination:"名古屋", prefecture:"愛知県",   region:"東海",     lat:35.1815, lng:136.9066, transportId:6, comment:"もうちょっと早く帰る(JR乗り継ぎ)",   defunct:false, defunctNote:null },
  // ============================================================
  // Leg 2-5  高知発
  // ============================================================
  { id:61, seriesId:"saikoro2", origin:"高知",    destination:"高知一泊", prefecture:"高知県",   region:"四国",     lat:33.5597, lng:133.5311, transportId:7, comment:"龍馬まつりもやっている",                       defunct:false, defunctNote:null },
  { id:62, seriesId:"saikoro2", origin:"高知",    destination:"高松",     prefecture:"香川県",   region:"四国",     lat:34.3428, lng:134.0462, transportId:6, comment:"いや、少しでも戻ろう",                         defunct:false, defunctNote:null },
  { id:63, seriesId:"saikoro2", origin:"高知",    destination:"大阪",     prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:4, comment:"もう少し戻ろう(フェリー9時間)",                defunct:true, defunctNote:"2015年廃止。バスで代替を推奨" },
  { id:64, seriesId:"saikoro2", origin:"高知",    destination:"東京",     prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:4, comment:"気長に戻ろう(フェリー20時間)",                 defunct:true, defunctNote:"2001年廃止。バスか新幹線で代替を推奨" },
  { id:65, seriesId:"saikoro2", origin:"高知",    destination:"京都",     prefecture:"京都府",   region:"近畿",     lat:34.9858, lng:135.7588, transportId:6, comment:"寝台なしの快速列車「ムーンライト高知」",        defunct:true, defunctNote:"2009年廃止" },
  { id:66, seriesId:"saikoro2", origin:"高知",    destination:"博多",     prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:3, comment:"地獄の深夜バスで九州逆戻り",                   defunct:false, defunctNote:null },

  // ============================================================
  // Leg 2-6  博多発
  // ============================================================
  { id:67, seriesId:"saikoro2", origin:"博多",   destination:"鹿児島",   prefecture:"鹿児島県", region:"九州沖縄", lat:31.5966, lng:130.5571, transportId:6, comment:"札幌はずっと遠いぞ",                           defunct:false, defunctNote:null },
  { id:68, seriesId:"saikoro2", origin:"博多",   destination:"白石島",   prefecture:"岡山県",   region:"中国",     lat:34.3614, lng:133.5942, transportId:6, comment:"名前は札幌に近いぞ",                           defunct:false, defunctNote:null },
  { id:69, seriesId:"saikoro2", origin:"博多",   destination:"直江津",   prefecture:"新潟県",   region:"甲信越",   lat:37.1758, lng:138.2353, transportId:4, comment:"フェリーで21時間",                             defunct:true, defunctNote:"2007年廃止。鉄道で代替?" },
  { id:70, seriesId:"saikoro2", origin:"博多",   destination:"対馬",     prefecture:"長崎県",   region:"九州沖縄", lat:34.2017, lng:129.2867, transportId:4, comment:"ジェットフォイルで2時間",                       defunct:false, defunctNote:null },
  { id:71, seriesId:"saikoro2", origin:"博多",   destination:"千歳",     prefecture:"北海道",   region:"北海道",   lat:42.8233, lng:141.6511, transportId:1, comment:"いいから早く出せ直行便",                       defunct:false, defunctNote:null },
  { id:72, seriesId:"saikoro2", origin:"博多",   destination:"盛岡",     prefecture:"岩手県",   region:"東北",     lat:39.7036, lng:141.1527, transportId:2, comment:"これでもいいぞ新幹線乗り継ぎ",                 defunct:false, defunctNote:null },

  // ============================================================
  // Leg 2-7  白石島発
  // ============================================================
  { id:73, seriesId:"saikoro2", origin:"白石島",  destination:"千歳",       prefecture:"北海道",   region:"北海道",   lat:42.8233, lng:141.6511, transportId:1, comment:"まだ間に合う",                     defunct:false, defunctNote:null },
  { id:74, seriesId:"saikoro2", origin:"白石島",  destination:"東京",       prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:2, comment:"とりあえず岡山戻って新幹線",                   defunct:false, defunctNote:null },
  { id:75, seriesId:"saikoro2", origin:"白石島",  destination:"新潟",       prefecture:"新潟県",   region:"甲信越",   lat:37.9161, lng:139.0364, transportId:2, comment:"新幹線ざんまい",                               defunct:false, defunctNote:null },
  { id:76, seriesId:"saikoro2", origin:"白石島",  destination:"白石島一泊", prefecture:"岡山県",   region:"中国",     lat:34.3614, lng:133.5942, transportId:7, comment:"",                                             defunct:false, defunctNote:null },
  { id:77, seriesId:"saikoro2", origin:"白石島",  destination:"徳島",       prefecture:"徳島県",   region:"四国",     lat:34.0658, lng:134.5593, transportId:6, comment:"瀬戸大橋を渡って四国に戻る",                   defunct:false, defunctNote:null },
  { id:78, seriesId:"saikoro2", origin:"白石島",  destination:"松江",       prefecture:"島根県",   region:"中国",     lat:35.4723, lng:133.0505, transportId:6, comment:"瀬戸内海の次は日本海",                         defunct:false, defunctNote:null },

  // ============================================================
  // Leg 2-8  徳島発
  // ============================================================
  { id:79, seriesId:"saikoro2", origin:"徳島",    destination:"東京",       prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:5, comment:"寝台特急「瀬戸」",                             defunct:true, defunctNote:"「サンライズ瀬戸号」が現存" },
  { id:80, seriesId:"saikoro2", origin:"徳島",    destination:"東京",       prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:3, comment:"寝台バス3連発「エディー号」",                    defunct:true, defunctNote:"2021年運休。代替の夜行バス多数" },
  { id:81, seriesId:"saikoro2", origin:"徳島",    destination:"東京",       prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:1, comment:"最終便(千歳直行もうない)",                     defunct:false, defunctNote:null },
  { id:82, seriesId:"saikoro2", origin:"徳島",    destination:"岡山",       prefecture:"岡山県",   region:"中国",     lat:34.6617, lng:133.9350, transportId:6, comment:"とりあえず本州(うずしお)",                     defunct:false, defunctNote:null },
  { id:83, seriesId:"saikoro2", origin:"徳島",    destination:"淡路島",     prefecture:"兵庫県",   region:"近畿",     lat:34.3833, lng:134.7500, transportId:3, comment:"もう一度島めぐり",                             defunct:false, defunctNote:null },
  { id:84, seriesId:"saikoro2", origin:"徳島",    destination:"徳島一泊",   prefecture:"徳島県",   region:"四国",     lat:34.0658, lng:134.5593, transportId:7, comment:"もう限界です",                                 defunct:false, defunctNote:null },

  // ============================================================
  // Leg 2-9  徳島発
  // ============================================================
  { id:85, seriesId:"saikoro2", origin:"徳島",    destination:"千歳",       prefecture:"北海道",   region:"北海道",   lat:42.8233, lng:141.6511, transportId:1, comment:"徳島空港",                                     defunct:false, defunctNote:null },
  { id:86, seriesId:"saikoro2", origin:"徳島",    destination:"大阪",       prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:3, comment:"まだ大丈夫！",                                 defunct:false, defunctNote:null },
  { id:87, seriesId:"saikoro2", origin:"徳島",    destination:"和歌山",     prefecture:"和歌山県", region:"近畿",     lat:34.2261, lng:135.1675, transportId:4, comment:"本州最南端",                                   defunct:false, defunctNote:null },
  { id:88, seriesId:"saikoro2", origin:"徳島",    destination:"高知",       prefecture:"高知県",   region:"四国",     lat:33.5597, lng:133.5311, transportId:6, comment:"四国最南端",                                   defunct:false, defunctNote:null },
  // ============================================================
  // saikoro3 - Leg 3-1 東京発
  // ============================================================
  { id:89,  seriesId:"saikoro3", origin:"東京",         destination:"岐阜",         prefecture:"岐阜県",   region:"東海",     lat:35.3914, lng:136.7223, transportId:3, comment:"パピヨン号 6時間30分",                       defunct:false, defunctNote:null },
  { id:90,  seriesId:"saikoro3", origin:"東京",         destination:"奈良",         prefecture:"奈良県",   region:"近畿",     lat:34.6851, lng:135.8048, transportId:3, comment:"やまと号 7時間30分",                         defunct:false, defunctNote:null },
  { id:91,  seriesId:"saikoro3", origin:"東京",         destination:"酒田",         prefecture:"山形県",   region:"東北",     lat:38.9145, lng:139.8364, transportId:3, comment:"夕陽号 9時間",                               defunct:false, defunctNote:null },
  { id:92,  seriesId:"saikoro3", origin:"東京",         destination:"弘前",         prefecture:"青森県",   region:"東北",     lat:40.6031, lng:140.4640, transportId:3, comment:"ノクターン号 9時間30分",                     defunct:false, defunctNote:null },
  { id:93,  seriesId:"saikoro3", origin:"東京",         destination:"鳥取",         prefecture:"鳥取県",   region:"中国",     lat:35.5039, lng:134.2381, transportId:3, comment:"キャメル号 10時間30分",                      defunct:false, defunctNote:null },
  { id:94,  seriesId:"saikoro3", origin:"東京",         destination:"高知",         prefecture:"高知県",   region:"四国",     lat:33.5597, lng:133.5311, transportId:3, comment:"ブルーメッツ号 11時間40分",                  defunct:false, defunctNote:null },

  // ============================================================
  // saikoro3 - Leg 3-2 鳥取発
  // ============================================================
  { id:95,  seriesId:"saikoro3", origin:"鳥取",         destination:"千歳",         prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"米子空港発直行便",                           defunct:false, defunctNote:null },
  { id:96,  seriesId:"saikoro3", origin:"鳥取",         destination:"隠岐島",       prefecture:"島根県",   region:"中国",     lat:36.2076, lng:133.3225, transportId:4, comment:"魅惑のアイランド",                           defunct:false, defunctNote:null },
  { id:97,  seriesId:"saikoro3", origin:"鳥取",         destination:"京都",         prefecture:"京都府",   region:"近畿",     lat:35.0116, lng:135.7681, transportId:6, comment:"少し戻って観光",                             defunct:false, defunctNote:null },
  { id:98,  seriesId:"saikoro3", origin:"鳥取",         destination:"名古屋",       prefecture:"愛知県",   region:"東海",     lat:35.1709, lng:136.8815, transportId:6, comment:"もう少し戻って",                             defunct:false, defunctNote:null },
  { id:99,  seriesId:"saikoro3", origin:"鳥取",         destination:"高松",         prefecture:"香川県",   region:"四国",     lat:34.3428, lng:134.0462, transportId:6, comment:"やっぱり四国",                               defunct:false, defunctNote:null },
  { id:100, seriesId:"saikoro3", origin:"鳥取",         destination:"小倉",         prefecture:"福岡県",   region:"九州沖縄", lat:33.8836, lng:130.8754, transportId:6, comment:"お約束 九州",                                defunct:false, defunctNote:null },

  // ============================================================
  // saikoro3 - Leg 3-3 京都発
  // ============================================================
  { id:101, seriesId:"saikoro3", origin:"京都",         destination:"敦賀",         prefecture:"福井県",   region:"北陸",     lat:35.6500, lng:136.0667, transportId:6, comment:"スーパー雷鳥サンダーバード27号",             defunct:false, defunctNote:null },
  { id:102, seriesId:"saikoro3", origin:"京都",         destination:"伊勢",         prefecture:"三重県",   region:"東海",     lat:34.4900, lng:136.7102, transportId:6, comment:"近鉄特急",                                   defunct:false, defunctNote:null },
  { id:103, seriesId:"saikoro3", origin:"京都",         destination:"東京",         prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:2, comment:"新幹線 ひかり242号",                         defunct:false, defunctNote:null },
  { id:104, seriesId:"saikoro3", origin:"京都",         destination:"広島",         prefecture:"広島県",   region:"中国",     lat:34.3853, lng:132.4553, transportId:2, comment:"新幹線 のぞみ13号",                          defunct:false, defunctNote:null },
  { id:105, seriesId:"saikoro3", origin:"京都",         destination:"天橋立",       prefecture:"京都府",   region:"近畿",     lat:35.5688, lng:135.1908, transportId:6, comment:"はしだて5号",                                defunct:false, defunctNote:null },
  { id:106, seriesId:"saikoro3", origin:"京都",         destination:"京都",         prefecture:"京都府",   region:"近畿",     lat:35.0116, lng:135.7681, transportId:7, comment:"舞妓さんとさしつさされつ",                   defunct:false, defunctNote:null },

  // ============================================================
  // saikoro3 - Leg 3-4 敦賀発
  // ============================================================
  { id:107, seriesId:"saikoro3", origin:"敦賀",         destination:"名古屋",       prefecture:"愛知県",   region:"東海",     lat:35.1709, lng:136.8815, transportId:6, comment:"着実に進もう",                               defunct:false, defunctNote:null },
  { id:108, seriesId:"saikoro3", origin:"敦賀",         destination:"静岡",         prefecture:"静岡県",   region:"東海",     lat:34.9756, lng:138.3829, transportId:2, comment:"もうちょっと進んで",                         defunct:false, defunctNote:null },
  { id:109, seriesId:"saikoro3", origin:"敦賀",         destination:"京都",         prefecture:"京都府",   region:"近畿",     lat:35.0116, lng:135.7681, transportId:6, comment:"舞妓さんが呼んでる",                         defunct:false, defunctNote:null },
  { id:110, seriesId:"saikoro3", origin:"敦賀",         destination:"鳥取",         prefecture:"鳥取県",   region:"中国",     lat:35.5039, lng:134.2381, transportId:6, comment:"砂丘も呼んでる",                             defunct:false, defunctNote:null },
  { id:111, seriesId:"saikoro3", origin:"敦賀",         destination:"金沢",         prefecture:"石川県",   region:"北陸",     lat:36.5944, lng:136.6256, transportId:6, comment:"寒そうだけどちょっと魅力",                   defunct:false, defunctNote:null },
  { id:112, seriesId:"saikoro3", origin:"敦賀",         destination:"小樽",         prefecture:"北海道",   region:"北海道",   lat:43.1907, lng:140.9947, transportId:4, comment:"恐怖の21時間フェリーで",                     defunct:true, defunctNote:"現在は苫小牧東港着" },

  // ============================================================
  // saikoro3 - Leg 3-5 金沢発
  // ============================================================
  { id:113, seriesId:"saikoro3", origin:"金沢",         destination:"羽田",         prefecture:"東京都",   region:"関東",     lat:35.5494, lng:139.7798, transportId:1, comment:"小松空港発",                                 defunct:false, defunctNote:null },
  { id:114, seriesId:"saikoro3", origin:"金沢",         destination:"富山",         prefecture:"富山県",   region:"北陸",     lat:36.6953, lng:137.2113, transportId:2, comment:"かがやき11号",                               defunct:false, defunctNote:null },
  { id:115, seriesId:"saikoro3", origin:"金沢",         destination:"函館",         prefecture:"北海道",   region:"北海道",   lat:41.7686, lng:140.7288, transportId:5, comment:"日本海1号 なんと",                           defunct:false, defunctNote:null },
  { id:116, seriesId:"saikoro3", origin:"金沢",         destination:"名古屋",       prefecture:"愛知県",   region:"東海",     lat:35.1709, lng:136.8815, transportId:3, comment:"長距離バス",                                 defunct:false, defunctNote:null },
  { id:117, seriesId:"saikoro3", origin:"金沢",         destination:"横浜",         prefecture:"神奈川県", region:"関東",     lat:35.4437, lng:139.6380, transportId:3, comment:"地獄の深夜バス「ラピュータ号」",             defunct:true,  defunctNote:"代替色々" },
  { id:118, seriesId:"saikoro3", origin:"金沢",         destination:"博多",         prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:3, comment:"死の深夜バス「加賀号」",                     defunct:true,  defunctNote:"大阪乗換で代替可能" },

  // ============================================================
  // saikoro3 - Leg 3-6 博多発
  // ============================================================
  { id:119, seriesId:"saikoro3", origin:"博多",         destination:"千歳",         prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"企画終了直行便",                             defunct:false, defunctNote:null },
  { id:120, seriesId:"saikoro3", origin:"博多",         destination:"東京",         prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:2, comment:"新幹線グリーン車でゆったり",                 defunct:false, defunctNote:null },
  { id:121, seriesId:"saikoro3", origin:"博多",         destination:"東京",         prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:1, comment:"いや飛行機でさっさと",                       defunct:false, defunctNote:null },
  { id:122, seriesId:"saikoro3", origin:"博多",         destination:"ハウステンボス", prefecture:"長崎県",  region:"九州沖縄", lat:33.0856, lng:129.7878, transportId:6, comment:"せっかくだから観光",                         defunct:false, defunctNote:null },
  { id:123, seriesId:"saikoro3", origin:"博多",         destination:"山形",         prefecture:"山形県",   region:"東北",     lat:38.2405, lng:140.3634, transportId:2, comment:"新幹線で一気に",                             defunct:false, defunctNote:null },
  { id:124, seriesId:"saikoro3", origin:"博多",         destination:"由布院",       prefecture:"大分県",   region:"九州沖縄", lat:33.2654, lng:131.3548, transportId:6, comment:"せっかくだから温泉",                         defunct:false, defunctNote:null },

  // ============================================================
  // saikoro3 - Leg 3-7 ハウステンボス発
  // ============================================================
  { id:125, seriesId:"saikoro3", origin:"ハウステンボス", destination:"ハウステンボス", prefecture:"長崎県", region:"九州沖縄", lat:33.0856, lng:129.7878, transportId:7, comment:"一泊滞在",                                   defunct:false, defunctNote:null },
  { id:126, seriesId:"saikoro3", origin:"ハウステンボス", destination:"ハウステンボス", prefecture:"長崎県", region:"九州沖縄", lat:33.0856, lng:129.7878, transportId:7, comment:"半日滞在",                                   defunct:false, defunctNote:null },
  { id:127, seriesId:"saikoro3", origin:"ハウステンボス", destination:"羽田",       prefecture:"東京都",   region:"関東",     lat:35.5494, lng:139.7798, transportId:1, comment:"長崎空港発",                                 defunct:false, defunctNote:null },
  { id:128, seriesId:"saikoro3", origin:"ハウステンボス", destination:"大阪",       prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:2, comment:"博多に戻って新幹線",                         defunct:false, defunctNote:null },
  { id:129, seriesId:"saikoro3", origin:"ハウステンボス", destination:"対馬",       prefecture:"長崎県",   region:"九州沖縄", lat:34.2009, lng:129.2895, transportId:1, comment:"韓国はすぐそこ",                             defunct:false, defunctNote:null },
  { id:130, seriesId:"saikoro3", origin:"ハウステンボス", destination:"鹿児島",     prefecture:"鹿児島県", region:"九州沖縄", lat:31.5966, lng:130.5571, transportId:2, comment:"ついに最南端",                               defunct:false, defunctNote:null },
  { id:131, seriesId:"saikoro3", origin:"鹿児島", destination:"一泊", prefecture:"鹿児島県", region:"九州沖縄", lat:31.5966, lng:130.5571, transportId:7, comment:"鹿児島", defunct:false, defunctNote:null},
  // ============================================================
  // saikoro3 - Leg 3-8 鹿児島発（132〜136 再提示）
  // ============================================================
  { id:132, seriesId:"saikoro3", origin:"鹿児島",   destination:"岡山", prefecture:"岡山県",   region:"中国",     lat:34.6618, lng:133.9344, transportId:5, comment:"まだまだ移動「寝台特急なは」", defunct:false, defunctNote:null },
  { id:133, seriesId:"saikoro3", origin:"鹿児島",   destination:"東京", prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:1, comment:"ANA630便",                     defunct:false, defunctNote:null },
  { id:134, seriesId:"saikoro3", origin:"鹿児島",   destination:"宮崎", prefecture:"宮崎県",   region:"九州沖縄", lat:31.9111, lng:131.4239, transportId:6, comment:"きりしま11号",                 defunct:false, defunctNote:null },
  { id:135, seriesId:"saikoro3", origin:"鹿児島",   destination:"大阪", prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:4, comment:"フェリーで11時間",             defunct:false, defunctNote:null },
  { id:136, seriesId:"saikoro3", origin:"鹿児島",   destination:"大阪", prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:1, comment:"JAL330便で1時間",              defunct:false, defunctNote:null },
  // ============================================================
  // saikoro3 - Leg 3-9 岡山発
  // ============================================================
  { id:137, seriesId:"saikoro3", origin:"岡山",   destination:"千歳",     prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"岡山空港発直行",               defunct:false, defunctNote:null },
  { id:138, seriesId:"saikoro3", origin:"岡山",   destination:"大阪",     prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:2, comment:"まだ間に合う",                 defunct:false, defunctNote:null },
  { id:139, seriesId:"saikoro3", origin:"岡山",   destination:"淡路島",   prefecture:"兵庫県",   region:"近畿",     lat:34.3578, lng:134.8237, transportId:4, comment:"瀬戸内島巡り",                 defunct:false, defunctNote:null },
  { id:140, seriesId:"saikoro3", origin:"岡山",   destination:"博多",     prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:2, comment:"九州へ戻る",                   defunct:false, defunctNote:null },

  // ============================================================
  // saikoro3 - Leg 3-10 淡路島発
  // ============================================================
  { id:141, seriesId:"saikoro3", origin:"淡路島", destination:"一泊",     prefecture:"兵庫県",   region:"近畿",     lat:34.3578, lng:134.8237, transportId:7, comment:"淡路島を満喫",                 defunct:false, defunctNote:null },
  { id:142, seriesId:"saikoro3", origin:"淡路島", destination:"小豆島",   prefecture:"香川県",   region:"四国",     lat:34.4847, lng:134.2417, transportId:4, comment:"瀬戸内を満喫",                 defunct:true, defunctNote:"全廃。高松or姫路経由で代替を推奨" },
  { id:143, seriesId:"saikoro3", origin:"淡路島", destination:"徳島",     prefecture:"徳島県",   region:"四国",     lat:34.0658, lng:134.5594, transportId:6, comment:"やっぱり四国",                 defunct:false, defunctNote:null },
  { id:144, seriesId:"saikoro3", origin:"淡路島", destination:"大阪",     prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:4, comment:"着実に戻る フェリーで",        defunct:true, defunctNote:"2007年廃止。鉄道で代替?" },
  { id:145, seriesId:"saikoro3", origin:"淡路島", destination:"東京",     prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:2, comment:"明石に渡って新幹線",           defunct:false, defunctNote:null },
  { id:146, seriesId:"saikoro3", origin:"淡路島", destination:"博多",     prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:2, comment:"明石に渡って新幹線",           defunct:false, defunctNote:null },

  // ============================================================
  // saikoro3 - Leg 3-11 徳島発
  // ============================================================
  { id:147, seriesId:"saikoro3", origin:"徳島",   destination:"東京",     prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:1, comment:"徳島空港発",                   defunct:false, defunctNote:null },
  { id:148, seriesId:"saikoro3", origin:"徳島",   destination:"倉敷",     prefecture:"岡山県",   region:"中国",     lat:34.5851, lng:133.7720, transportId:6, comment:"さよなら四国",                 defunct:false, defunctNote:null },
  { id:149, seriesId:"saikoro3", origin:"徳島",   destination:"神戸",     prefecture:"兵庫県",   region:"近畿",     lat:34.6913, lng:135.1830, transportId:4, comment:"フェリーで行く",               defunct:true, defunctNote:"全廃済み、バスで淡路経由を推奨" },
  { id:150, seriesId:"saikoro3", origin:"徳島",   destination:"和歌山",   prefecture:"和歌山県", region:"近畿",     lat:34.2261, lng:135.1675, transportId:4, comment:"本州最南端",                   defunct:false, defunctNote:null },
  { id:151, seriesId:"saikoro3", origin:"徳島",   destination:"松山",     prefecture:"愛媛県",   region:"四国",     lat:33.8416, lng:132.7657, transportId:6, comment:"四国を満喫",                   defunct:false, defunctNote:null },
  { id:152, seriesId:"saikoro3", origin:"徳島",   destination:"臼杵",     prefecture:"大分県",   region:"九州沖縄", lat:33.1265, lng:131.8049, transportId:4, comment:"石仏のまち",                   defunct:false, defunctNote:null },
  // ============================================================
  // saikoro3 - Leg 3-12 倉敷発
  // ============================================================
  { id:153, seriesId:"saikoro3", origin:"倉敷",     destination:"広島",       prefecture:"広島県",   region:"中国",     lat:34.3853, lng:132.4553, transportId:2, comment:"新幹線こだま",                 defunct:false, defunctNote:null },
  { id:154, seriesId:"saikoro3", origin:"倉敷",     destination:"東京",       prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:1, comment:"岡山空港発",                   defunct:false, defunctNote:null },
  { id:155, seriesId:"saikoro3", origin:"倉敷",     destination:"名古屋",     prefecture:"愛知県",   region:"東海",     lat:35.1709, lng:136.8815, transportId:2, comment:"新幹線ひかり",                 defunct:false, defunctNote:null },
  { id:156, seriesId:"saikoro3", origin:"倉敷",     destination:"東京",       prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:3, comment:"深夜バス「マスカット号」",     defunct:false, defunctNote:null },

  // ============================================================
  // saikoro3 - Leg 3-13 東京発
  // ============================================================
  { id:157, seriesId:"saikoro3", origin:"東京",     destination:"千歳",       prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"もう限界です",                 defunct:false, defunctNote:null },
  { id:158, seriesId:"saikoro3", origin:"東京",     destination:"国会議事堂前", prefecture:"東京都", region:"関東",     lat:35.6740, lng:139.7458, transportId:6, comment:"地下鉄丸ノ内線",               defunct:false, defunctNote:null },
  { id:159, seriesId:"saikoro3", origin:"東京",     destination:"盛岡",       prefecture:"岩手県",   region:"東北",     lat:39.7036, lng:141.1527, transportId:2, comment:"東北新幹線",                   defunct:false, defunctNote:null },
  { id:160, seriesId:"saikoro3", origin:"東京",     destination:"越後湯沢",   prefecture:"新潟県",   region:"甲信越",   lat:36.9358, lng:138.8083, transportId:2, comment:"上越新幹線",                   defunct:false, defunctNote:null },
  { id:161, seriesId:"saikoro3", origin:"東京",     destination:"神戸",       prefecture:"兵庫県",   region:"近畿",     lat:34.6913, lng:135.1830, transportId:2, comment:"東海道新幹線逆戻り",           defunct:false, defunctNote:null },
  { id:162, seriesId:"saikoro3", origin:"東京",     destination:"塩尻",       prefecture:"長野県",   region:"甲信越",   lat:36.1144, lng:137.9526, transportId:6, comment:"中央本線",                     defunct:false, defunctNote:null },

  // ============================================================
  // saikoro3 - Leg 3-14 神戸発
  // ============================================================
  { id:163, seriesId:"saikoro3", origin:"神戸",     destination:"湯村温泉",   prefecture:"兵庫県",   region:"近畿",     lat:35.5667, lng:134.5167, transportId:6, comment:"ちょっとひとっ風呂",           defunct:true,  defunctNote:"高速バスで代替" },
  { id:164, seriesId:"saikoro3", origin:"神戸",     destination:"播磨横田",   prefecture:"兵庫県",   region:"近畿",     lat:34.8806, lng:134.8642, transportId:6, comment:"北条鉄道レールバス",           defunct:false, defunctNote:null },
  { id:165, seriesId:"saikoro3", origin:"神戸",     destination:"阪神梅田",   prefecture:"大阪府",   region:"近畿",     lat:34.7028, lng:135.4983, transportId:6, comment:"阪神電鉄",                     defunct:false, defunctNote:null },
  { id:166, seriesId:"saikoro3", origin:"神戸",     destination:"千歳",       prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"関空発直行便",                 defunct:false, defunctNote:null },
  { id:167, seriesId:"saikoro3", origin:"神戸",     destination:"盛岡",       prefecture:"岩手県",   region:"東北",     lat:39.7036, lng:141.1527, transportId:2, comment:"新幹線で一気に",               defunct:false, defunctNote:null },
  { id:168, seriesId:"saikoro3", origin:"神戸",     destination:"博多",       prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:2, comment:"新幹線で一気に",               defunct:false, defunctNote:null },

  // ============================================================
  // saikoro3 - Leg 3-15 湯村温泉発
  // ============================================================
  { id:169, seriesId:"saikoro3", origin:"湯村温泉", destination:"一泊",       prefecture:"兵庫県",   region:"近畿",     lat:35.5667, lng:134.5167, transportId:7, comment:"湯村温泉で",                   defunct:false, defunctNote:null },
  { id:170, seriesId:"saikoro3", origin:"湯村温泉", destination:"城崎温泉",   prefecture:"兵庫県",   region:"近畿",     lat:35.6244, lng:134.8069, transportId:6, comment:"一泊",                         defunct:false, defunctNote:null },
  { id:171, seriesId:"saikoro3", origin:"湯村温泉", destination:"舞鶴",       prefecture:"京都府",   region:"近畿",     lat:35.4750, lng:135.3856, transportId:6, comment:"若狭湾の海の幸",               defunct:false, defunctNote:null },
  { id:172, seriesId:"saikoro3", origin:"湯村温泉", destination:"京都",       prefecture:"京都府",   region:"近畿",     lat:35.0116, lng:135.7681, transportId:6, comment:"やっぱり行きたい",             defunct:false, defunctNote:null },
  { id:173, seriesId:"saikoro3", origin:"湯村温泉", destination:"鳥取",       prefecture:"鳥取県",   region:"中国",     lat:35.5039, lng:134.2381, transportId:6, comment:"やっぱり呼んでる",             defunct:false, defunctNote:null },
  { id:174, seriesId:"saikoro3", origin:"湯村温泉", destination:"松江",       prefecture:"島根県",   region:"中国",     lat:35.4723, lng:133.0506, transportId:6, comment:"ここも何もないぞ",             defunct:false, defunctNote:null },
  // ============================================================
  // saikoro3 - Leg 3-16 京都発
  // ============================================================
  { id:175, seriesId:"saikoro3", origin:"京都",   destination:"佐世保",   prefecture:"長崎県",   region:"九州沖縄", lat:33.1799, lng:129.7150, transportId:5, comment:"寝台特急「あかつき」",                 defunct:true,  defunctNote:"廃止" },
  { id:176, seriesId:"saikoro3", origin:"京都",   destination:"新潟",     prefecture:"新潟県",   region:"甲信越",   lat:37.9161, lng:139.0364, transportId:5, comment:"寝台急行「きたぐに」",                 defunct:true,  defunctNote:"廃止" },
  { id:177, seriesId:"saikoro3", origin:"京都",   destination:"福島",     prefecture:"福島県",   region:"東北",     lat:37.7503, lng:140.4676, transportId:3, comment:"恐怖! 深夜バス「ギャラクシー号」",     defunct:false, defunctNote:null },
  { id:178, seriesId:"saikoro3", origin:"京都",   destination:"長崎",     prefecture:"長崎県",   region:"九州沖縄", lat:32.7448, lng:129.8737, transportId:3, comment:"出すな! 深夜バス「ながさき号」",       defunct:false, defunctNote:null },
  { id:179, seriesId:"saikoro3", origin:"京都",   destination:"一泊",     prefecture:"京都府",   region:"近畿",     lat:35.0116, lng:135.7681, transportId:7, comment:"出せ! 京都",                           defunct:false, defunctNote:null },
  { id:180, seriesId:"saikoro3", origin:"京都",   destination:"一泊",     prefecture:"京都府",   region:"近畿",     lat:35.0116, lng:135.7681, transportId:7, comment:"たのむ! 京都",                         defunct:false, defunctNote:null },

  // ============================================================
  // saikoro3 - Leg 3-17 福島発
  // ============================================================
  { id:181, seriesId:"saikoro3", origin:"福島",   destination:"千歳",     prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"福島空港発",                           defunct:false, defunctNote:null },
  { id:182, seriesId:"saikoro3", origin:"福島",   destination:"仙台",     prefecture:"宮城県",   region:"東北",     lat:38.2688, lng:140.8721, transportId:2, comment:"ちょっと進む",                         defunct:false, defunctNote:null },
  { id:183, seriesId:"saikoro3", origin:"福島",   destination:"野辺地",   prefecture:"青森県",   region:"東北",     lat:40.8628, lng:141.1281, transportId:2, comment:"ぐっと進む",                           defunct:false, defunctNote:null },
  { id:184, seriesId:"saikoro3", origin:"福島",   destination:"大曲",     prefecture:"秋田県",   region:"東北",     lat:39.4548, lng:140.4783, transportId:2, comment:"遠まわりだけど進む",                   defunct:false, defunctNote:null },
  { id:185, seriesId:"saikoro3", origin:"福島",   destination:"宇都宮",   prefecture:"栃木県",   region:"関東",     lat:36.5551, lng:139.8828, transportId:2, comment:"ちょっと戻る",                         defunct:false, defunctNote:null },
  { id:186, seriesId:"saikoro3", origin:"福島",   destination:"東京",     prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:2, comment:"ぐっと戻る",                           defunct:false, defunctNote:null },

  // ============================================================
  // saikoro3 - Leg 3-18 大曲発（5件・千歳重複回避のため1件欠番）
  // ============================================================
  { id:187, seriesId:"saikoro3", origin:"大曲",   destination:"盛岡",     prefecture:"岩手県",   region:"東北",     lat:39.7036, lng:141.1527, transportId:2, comment:"開通したて秋田新幹線で",               defunct:false, defunctNote:null },
  { id:188, seriesId:"saikoro3", origin:"大曲",   destination:"青森",     prefecture:"青森県",   region:"東北",     lat:40.8246, lng:140.7406, transportId:6, comment:"奥羽本線で一気に",                     defunct:false, defunctNote:null },
  { id:189, seriesId:"saikoro3", origin:"大曲",   destination:"乳頭温泉", prefecture:"秋田県",   region:"東北",     lat:39.7853, lng:140.7864, transportId:6, comment:"ひとっ風呂浴びたい",                   defunct:false, defunctNote:null },
  { id:190, seriesId:"saikoro3", origin:"大曲",   destination:"阿仁マタギ", prefecture:"秋田県", region:"東北",     lat:40.0083, lng:140.4583, transportId:6, comment:"秋田内陸縦貫鉄道で",                   defunct:false, defunctNote:null },
  { id:191, seriesId:"saikoro3", origin:"大曲",   destination:"千歳",     prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"秋田空港発",                           defunct:false, defunctNote:null },

  // ============================================================
  // saikoro3 - Leg 3-19 盛岡発
  // ============================================================
  { id:192, seriesId:"saikoro3", origin:"盛岡",   destination:"千歳",     prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"盛岡から一気に",                       defunct:false, defunctNote:null },
  { id:193, seriesId:"saikoro3", origin:"盛岡",   destination:"千歳",     prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"花巻から一気に",                       defunct:false, defunctNote:null },
  { id:194, seriesId:"saikoro3", origin:"盛岡",   destination:"千歳",     prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"三沢から一気に",                       defunct:false, defunctNote:null },
  { id:195, seriesId:"saikoro3", origin:"盛岡",   destination:"苫小牧",   prefecture:"北海道",   region:"北海道",   lat:42.6333, lng:141.6044, transportId:1, comment:"八戸から一気に",                       defunct:false, defunctNote:null },
  { id:196, seriesId:"saikoro3", origin:"盛岡",   destination:"東京",     prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:2, comment:"新幹線でふり出しに戻る",               defunct:false, defunctNote:null },
  { id:197, seriesId:"saikoro3", origin:"盛岡",   destination:"東京",     prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:3, comment:"深夜バス「らくちん号」でふり出しに戻る", defunct:true,  defunctNote:"2021年運休。代替は「ドリーム青森/盛岡・東京号」が盛岡経由で現存" },
  // ============================================================
  // saikoro4 - Leg 4-1 出雲発
  // ============================================================
  { id:198, seriesId:"saikoro4", origin:"出雲",       destination:"宿毛",       prefecture:"高知県",   region:"四国",     lat:32.9333, lng:132.7167, transportId:6, comment:"あぁ懐かしい高知県",                       defunct:false, defunctNote:null },
  { id:199, seriesId:"saikoro4", origin:"出雲",       destination:"小倉",       prefecture:"福岡県",   region:"九州沖縄", lat:33.8836, lng:130.8754, transportId:6, comment:"気合を入れて九州",                         defunct:false, defunctNote:null },
  { id:200, seriesId:"saikoro4", origin:"出雲",       destination:"広島",       prefecture:"広島県",   region:"中国",     lat:34.3853, lng:132.4553, transportId:6, comment:"ちょっと魅力",                             defunct:false, defunctNote:null },
  { id:201, seriesId:"saikoro4", origin:"出雲",       destination:"羽合温泉",   prefecture:"鳥取県",   region:"中国",     lat:35.4833, lng:133.8833, transportId:6, comment:"これも魅力 ハワイ",                        defunct:false, defunctNote:null },
  { id:202, seriesId:"saikoro4", origin:"出雲",       destination:"羽田",       prefecture:"東京都",   region:"関東",     lat:35.5494, lng:139.7798, transportId:1, comment:"JAS278便で",                               defunct:false, defunctNote:null },
  { id:203, seriesId:"saikoro4", origin:"出雲",       destination:"渋谷",       prefecture:"東京都",   region:"関東",     lat:35.6580, lng:139.7016, transportId:3, comment:"お待たせ! 深夜バス「スサノオ号」",         defunct:false, defunctNote:null },

  // ============================================================
  // saikoro4 - Leg 4-2 広島発
  // ============================================================
  { id:204, seriesId:"saikoro4", origin:"広島",       destination:"博多",       prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:2, comment:"ひかり55号",                               defunct:false, defunctNote:null },
  { id:205, seriesId:"saikoro4", origin:"広島",       destination:"東京",       prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:5, comment:"寝台特急「あさかぜ」",                     defunct:true,  defunctNote:"廃止" },
  { id:206, seriesId:"saikoro4", origin:"広島",       destination:"名古屋",     prefecture:"愛知県",   region:"東海",     lat:35.1709, lng:136.8815, transportId:3, comment:"深夜バス「セレナーデ」",                   defunct:true,  defunctNote:"代替広島ドリーム名古屋号" },
  { id:207, seriesId:"saikoro4", origin:"広島",       destination:"京都",       prefecture:"京都府",   region:"近畿",     lat:35.0116, lng:135.7681, transportId:3, comment:"深夜バス「まいこ号」",                     defunct:true,  defunctNote:"代替青春ドリーム広島号" },
  { id:208, seriesId:"saikoro4", origin:"広島",       destination:"長崎",       prefecture:"長崎県",   region:"九州沖縄", lat:32.7448, lng:129.8737, transportId:3, comment:"深夜バス「ながさき号」",                   defunct:true,  defunctNote:"2002年廃止" },
  { id:209, seriesId:"saikoro4", origin:"広島",       destination:"一泊",       prefecture:"広島県",   region:"中国",     lat:34.3853, lng:132.4553, transportId:7, comment:"カキを食べて 広島",                        defunct:false, defunctNote:null },

  // ============================================================
  // saikoro4 - Leg 4-3 広島発
  // ============================================================
  { id:210, seriesId:"saikoro4", origin:"広島",       destination:"千歳",       prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"直行便",                                   defunct:false, defunctNote:null },
  { id:211, seriesId:"saikoro4", origin:"広島",       destination:"萩",         prefecture:"山口県",   region:"中国",     lat:34.4076, lng:131.3993, transportId:3, comment:"長距離バスで",                             defunct:false, defunctNote:null },
  { id:212, seriesId:"saikoro4", origin:"広島",       destination:"松山",       prefecture:"愛媛県",   region:"四国",     lat:33.8416, lng:132.7657, transportId:4, comment:"瀬戸内汽船で",                             defunct:false, defunctNote:null },
  { id:213, seriesId:"saikoro4", origin:"広島",       destination:"富山",       prefecture:"富山県",   region:"北陸",     lat:36.6953, lng:137.2113, transportId:2, comment:"ひかり130号とサンダーバードで",             defunct:false, defunctNote:null },
  { id:214, seriesId:"saikoro4", origin:"広島",       destination:"博多",       prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:2, comment:"こだま559号",                               defunct:false, defunctNote:null },
  { id:215, seriesId:"saikoro4", origin:"広島",       destination:"ソウル",     prefecture:"韓国",     region:"九州沖縄", lat:37.5665, lng:126.9780, transportId:1, comment:"アシアナ航空で",                           defunct:false, defunctNote:null },

  // ============================================================
  // saikoro4 - Leg 4-4 富山発
  // ============================================================
  { id:216, seriesId:"saikoro4", origin:"富山",       destination:"青森",       prefecture:"青森県",   region:"東北",     lat:40.8246, lng:140.7406, transportId:6, comment:"一気に近づく 特急「白鳥」",                defunct:true,  defunctNote:"廃止" },
  { id:217, seriesId:"saikoro4", origin:"富山",       destination:"札幌",       prefecture:"北海道",   region:"北海道",   lat:43.0642, lng:141.3469, transportId:5, comment:"一気にゴール トワイライトエクスプレス",    defunct:true,  defunctNote:"廃止" },
  { id:218, seriesId:"saikoro4", origin:"富山",       destination:"下呂",       prefecture:"岐阜県",   region:"東海",     lat:35.8045, lng:137.2442, transportId:6, comment:"大泉ピンチ",                               defunct:false, defunctNote:null },
  { id:219, seriesId:"saikoro4", origin:"富山",       destination:"輪島",       prefecture:"石川県",   region:"北陸",     lat:37.3906, lng:136.8990, transportId:6, comment:"能登を満喫",                               defunct:false, defunctNote:null },
  { id:220, seriesId:"saikoro4", origin:"富山",       destination:"信濃大町",   prefecture:"長野県",   region:"甲信越",   lat:36.5022, lng:137.8517, transportId:6, comment:"日本アルプスを満喫",                       defunct:false, defunctNote:null },
  { id:221, seriesId:"saikoro4", origin:"富山",       destination:"敦賀",       prefecture:"福井県",   region:"北陸",     lat:35.6500, lng:136.0667, transportId:6, comment:"ぐっと戻る",                               defunct:false, defunctNote:null },

  // ============================================================
  // saikoro4 - Leg 4-5 信濃大町発
  // ============================================================
  { id:222, seriesId:"saikoro4", origin:"信濃大町",   destination:"長野",       prefecture:"長野県",   region:"甲信越",   lat:36.6513, lng:138.1810, transportId:6, comment:"善光寺でお参り",                           defunct:false, defunctNote:null },
  { id:223, seriesId:"saikoro4", origin:"信濃大町",   destination:"伊勢",       prefecture:"三重県",   region:"東海",     lat:34.4900, lng:136.7102, transportId:6, comment:"伊勢神宮でお参り",                         defunct:false, defunctNote:null },
  { id:224, seriesId:"saikoro4", origin:"信濃大町",   destination:"一泊",       prefecture:"長野県",   region:"甲信越",   lat:36.5022, lng:137.8517, transportId:7, comment:"今日も頼むぞ 信濃大町",                    defunct:false, defunctNote:null },
  { id:225, seriesId:"saikoro4", origin:"信濃大町",   destination:"福島",       prefecture:"福島県",   region:"東北",     lat:37.7503, lng:140.4676, transportId:2, comment:"開始したて長野新幹線と東北新幹線で",       defunct:false, defunctNote:null },
  { id:226, seriesId:"saikoro4", origin:"信濃大町",   destination:"甲府",       prefecture:"山梨県",   region:"甲信越",   lat:35.6642, lng:138.5684, transportId:6, comment:"JR乗り継ぎで",                             defunct:false, defunctNote:null },
  { id:227, seriesId:"saikoro4", origin:"信濃大町",   destination:"新宿",       prefecture:"東京都",   region:"関東",     lat:35.6938, lng:139.7034, transportId:3, comment:"高速バスで",                               defunct:false, defunctNote:null },

  // ============================================================
  // saikoro4 - Leg 4-6 伊勢発
  // ============================================================
  { id:228, seriesId:"saikoro4", origin:"伊勢",       destination:"仙台",       prefecture:"宮城県",   region:"東北",     lat:38.2688, lng:140.8721, transportId:2, comment:"無理して近付く新幹線",                     defunct:false, defunctNote:null },
  { id:229, seriesId:"saikoro4", origin:"伊勢",       destination:"博多",       prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:2, comment:"そろそろ行くか新幹線",                     defunct:false, defunctNote:null },
  { id:230, seriesId:"saikoro4", origin:"伊勢",       destination:"高野山",     prefecture:"和歌山県", region:"近畿",     lat:34.2130, lng:135.5825, transportId:6, comment:"高野山でお参り",                           defunct:false, defunctNote:null },
  { id:231, seriesId:"saikoro4", origin:"伊勢",       destination:"奈良",       prefecture:"奈良県",   region:"近畿",     lat:34.6851, lng:135.8048, transportId:6, comment:"奈良でお参りざんまい",                     defunct:false, defunctNote:null },
  { id:232, seriesId:"saikoro4", origin:"伊勢",       destination:"松阪",       prefecture:"三重県",   region:"東海",     lat:34.5781, lng:136.5308, transportId:6, comment:"せっかくだから松阪牛",                     defunct:false, defunctNote:null },
  { id:233, seriesId:"saikoro4", origin:"伊勢",       destination:"潮岬",       prefecture:"和歌山県", region:"近畿",     lat:33.4372, lng:135.7547, transportId:6, comment:"本州最南端",                               defunct:false, defunctNote:null },

  // ============================================================
  // saikoro4 - Leg 4-7 仙台発
  // ============================================================
  { id:234, seriesId:"saikoro4", origin:"仙台",       destination:"札幌",       prefecture:"北海道",   region:"北海道",   lat:43.0642, lng:141.3469, transportId:5, comment:"北斗星1号で",                               defunct:true,  defunctNote:"廃止" },
  { id:235, seriesId:"saikoro4", origin:"仙台",       destination:"札幌",       prefecture:"北海道",   region:"北海道",   lat:43.0642, lng:141.3469, transportId:5, comment:"北斗星3号で",                               defunct:true,  defunctNote:"廃止" },
  { id:236, seriesId:"saikoro4", origin:"仙台",       destination:"札幌",       prefecture:"北海道",   region:"北海道",   lat:43.0642, lng:141.3469, transportId:5, comment:"北斗星5号で",                               defunct:true,  defunctNote:"廃止" },
  { id:237, seriesId:"saikoro4", origin:"仙台",       destination:"苫小牧",     prefecture:"北海道",   region:"北海道",   lat:42.6333, lng:141.6044, transportId:4, comment:"フェリーで",                               defunct:false, defunctNote:null },
  { id:238, seriesId:"saikoro4", origin:"仙台",       destination:"宇都宮",     prefecture:"栃木県",   region:"関東",     lat:36.5551, lng:139.8828, transportId:2, comment:"東北新幹線で逆戻り",                       defunct:false, defunctNote:null },
  { id:239, seriesId:"saikoro4", origin:"仙台",       destination:"名古屋",     prefecture:"愛知県",   region:"東海",     lat:35.1709, lng:136.8815, transportId:3, comment:"深夜バス青葉号で逆戻り",                   defunct:false, defunctNote:null },

  // ============================================================
  // saikoro4 - Leg 4-8 宇都宮発
  // ============================================================
  { id:240, seriesId:"saikoro4", origin:"宇都宮",     destination:"札幌",       prefecture:"北海道",   region:"北海道",   lat:43.0642, lng:141.3469, transportId:5, comment:"北斗星5号で",                               defunct:true,  defunctNote:"廃止" },
  { id:241, seriesId:"saikoro4", origin:"宇都宮",     destination:"青森",       prefecture:"青森県",   region:"東北",     lat:40.8246, lng:140.7406, transportId:5, comment:"寝台特急「はくつる」",                     defunct:true,  defunctNote:"廃止" },
  { id:242, seriesId:"saikoro4", origin:"宇都宮",     destination:"秋田",       prefecture:"秋田県",   region:"東北",     lat:39.7200, lng:140.1025, transportId:2, comment:"秋田新幹線で",                             defunct:false, defunctNote:null },
  { id:243, seriesId:"saikoro4", origin:"宇都宮",     destination:"成田",       prefecture:"千葉県",   region:"関東",     lat:35.7720, lng:140.3929, transportId:6, comment:"JR乗り継ぎで",                             defunct:false, defunctNote:null },
  { id:244, seriesId:"saikoro4", origin:"宇都宮",     destination:"一泊",       prefecture:"栃木県",   region:"関東",     lat:36.5551, lng:139.8828, transportId:7, comment:"ぎょうざの街 宇都宮",                      defunct:false, defunctNote:null },
  { id:245, seriesId:"saikoro4", origin:"宇都宮",     destination:"京都",       prefecture:"京都府",   region:"近畿",     lat:35.0116, lng:135.7681, transportId:3, comment:"深夜バス「とちの木号」",                   defunct:false, defunctNote:null },

  // ============================================================
  // saikoro4 - Leg 4-9 京都発（画像ここまで・3件のみ）
  // ============================================================
  { id:246, seriesId:"saikoro4", origin:"京都",       destination:"東京",       prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:2, comment:"新幹線で逆戻り",                           defunct:false, defunctNote:null },
  { id:247, seriesId:"saikoro4", origin:"京都",       destination:"博多",       prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:2, comment:"これはシャレです",                         defunct:false, defunctNote:null },
  { id:248, seriesId:"saikoro4", origin:"京都",       destination:"千歳",       prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"関空発直行便",                             defunct:false, defunctNote:null },
  // ============================================================
  // saikoro5 - Leg 5-1 東京発
  // ============================================================
  { id:249, seriesId:"saikoro5", origin:"東京",     destination:"奈良",       prefecture:"奈良県",   region:"近畿",     lat:34.6851, lng:135.8048, transportId:3, comment:"やまと号 7時間50分",                       defunct:false, defunctNote:null },
  { id:250, seriesId:"saikoro5", origin:"東京",     destination:"秋田",       prefecture:"秋田県",   region:"東北",     lat:39.7200, lng:140.1025, transportId:3, comment:"フローラ号 8時間30分",                     defunct:false, defunctNote:null },
  { id:251, seriesId:"saikoro5", origin:"東京",     destination:"八戸",       prefecture:"青森県",   region:"東北",     lat:40.5121, lng:141.4884, transportId:3, comment:"シリウス号 9時間5分",                      defunct:false, defunctNote:null },
  { id:252, seriesId:"saikoro5", origin:"東京",     destination:"高知",       prefecture:"高知県",   region:"四国",     lat:33.5597, lng:133.5311, transportId:3, comment:"ブルーメッツ号 11時間50分",                defunct:false, defunctNote:null },
  { id:253, seriesId:"saikoro5", origin:"東京",     destination:"広島",       prefecture:"広島県",   region:"中国",     lat:34.3853, lng:132.4553, transportId:3, comment:"ニューブリーズ号 12時間",                  defunct:false, defunctNote:null },
  { id:254, seriesId:"saikoro5", origin:"東京",     destination:"博多",       prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:3, comment:"はかた号 14時間20分",                      defunct:false, defunctNote:null },

  // ============================================================
  // saikoro5 - Leg 5-2 博多発
  // ============================================================
  { id:255, seriesId:"saikoro5", origin:"博多",     destination:"千歳",       prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"ANA273号で",                               defunct:false, defunctNote:null },
  { id:256, seriesId:"saikoro5", origin:"博多",     destination:"東京",       prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:2, comment:"のぞみ10号 5時間で",                       defunct:false, defunctNote:null },
  { id:257, seriesId:"saikoro5", origin:"博多",     destination:"鹿児島",     prefecture:"鹿児島県", region:"九州沖縄", lat:31.5966, lng:130.5571, transportId:6, comment:"特急「つばめ3号」",                        defunct:false, defunctNote:null },
  { id:258, seriesId:"saikoro5", origin:"博多",     destination:"宇和島",     prefecture:"愛媛県",   region:"四国",     lat:33.2236, lng:132.5606, transportId:4, comment:"JRとフェリーで",                           defunct:false, defunctNote:null },
  { id:259, seriesId:"saikoro5", origin:"博多",     destination:"対馬",       prefecture:"長崎県",   region:"九州沖縄", lat:34.2009, lng:129.2895, transportId:4, comment:"フェリーで4時間",                          defunct:false, defunctNote:null },
  { id:260, seriesId:"saikoro5", origin:"博多",     destination:"直江津",     prefecture:"新潟県",   region:"甲信越",   lat:37.1769, lng:138.2353, transportId:4, comment:"フェリーで20時間",                         defunct:true, defunctNote:"2007年廃止。鉄道で代替?"},

  // ============================================================
  // saikoro5 - Leg 5-3 鹿児島発
  // ============================================================
  { id:261, seriesId:"saikoro5", origin:"鹿児島",   destination:"霧島",       prefecture:"鹿児島県", region:"九州沖縄", lat:31.7320, lng:130.7647, transportId:6, comment:"ひとっ風呂あびたい",                       defunct:false, defunctNote:null },
  { id:262, seriesId:"saikoro5", origin:"鹿児島",   destination:"指宿",       prefecture:"鹿児島県", region:"九州沖縄", lat:31.2517, lng:130.6328, transportId:6, comment:"ひとっ風呂あびたい",                       defunct:false, defunctNote:null },
  { id:263, seriesId:"saikoro5", origin:"鹿児島",   destination:"由布院",     prefecture:"大分県",   region:"九州沖縄", lat:33.2654, lng:131.3548, transportId:6, comment:"ひとっ風呂あびたい",                       defunct:false, defunctNote:null },
  { id:264, seriesId:"saikoro5", origin:"鹿児島",   destination:"雲仙",       prefecture:"長崎県",   region:"九州沖縄", lat:32.7350, lng:130.2628, transportId:6, comment:"ひとっ風呂あびたい",                       defunct:false, defunctNote:null },
  { id:265, seriesId:"saikoro5", origin:"鹿児島",   destination:"宮崎",       prefecture:"宮崎県",   region:"九州沖縄", lat:31.9111, lng:131.4239, transportId:6, comment:"特急「きりしま10号」",                     defunct:false, defunctNote:null },
  { id:266, seriesId:"saikoro5", origin:"鹿児島",   destination:"羽田",       prefecture:"東京都",   region:"関東",     lat:35.5494, lng:139.7798, transportId:1, comment:"ANA626便",                                 defunct:false, defunctNote:null },

  // ============================================================
  // saikoro5 - Leg 5-4 指宿発
  // ============================================================
  { id:267, seriesId:"saikoro5", origin:"指宿",     destination:"一泊",       prefecture:"鹿児島県", region:"九州沖縄", lat:31.2517, lng:130.6328, transportId:7, comment:"指宿で",                                   defunct:false, defunctNote:null },
  { id:268, seriesId:"saikoro5", origin:"指宿",     destination:"羽田",       prefecture:"東京都",   region:"関東",     lat:35.5494, lng:139.7798, transportId:1, comment:"JAL最終便",                                defunct:false, defunctNote:null },
  { id:269, seriesId:"saikoro5", origin:"指宿",     destination:"大阪",       prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:5, comment:"寝台特急「なは」",                         defunct:true,  defunctNote:"2008年廃止" },
  { id:270, seriesId:"saikoro5", origin:"指宿",     destination:"由布院",     prefecture:"大分県",   region:"九州沖縄", lat:33.2654, lng:131.3548, transportId:6, comment:"九州を満喫",                               defunct:false, defunctNote:null },
  { id:271, seriesId:"saikoro5", origin:"指宿",     destination:"奄美大島",   prefecture:"鹿児島県", region:"九州沖縄", lat:28.3771, lng:129.4937, transportId:1, comment:"もっと南へ",                               defunct:false, defunctNote:null },
  { id:272, seriesId:"saikoro5", origin:"指宿",     destination:"神戸",       prefecture:"兵庫県",   region:"近畿",     lat:34.6913, lng:135.1830, transportId:3, comment:"深夜バス「トロピカルライナー」",           defunct:true,  defunctNote:"2016年廃止" },

  // ============================================================
  // saikoro5 - Leg 5-5 奄美大島発
  // ============================================================
  { id:273, seriesId:"saikoro5", origin:"奄美大島", destination:"一泊",       prefecture:"鹿児島県", region:"九州沖縄", lat:28.3771, lng:129.4937, transportId:7, comment:"奄美大島でゆっくり観光",                   defunct:false, defunctNote:null },
  { id:274, seriesId:"saikoro5", origin:"奄美大島", destination:"大阪",       prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:1, comment:"JASで一気に",                              defunct:false, defunctNote:null },
  { id:275, seriesId:"saikoro5", origin:"奄美大島", destination:"鹿児島",     prefecture:"鹿児島県", region:"九州沖縄", lat:31.5966, lng:130.5571, transportId:4, comment:"大島輸送フェリーで",                       defunct:false, defunctNote:null },
  { id:276, seriesId:"saikoro5", origin:"奄美大島", destination:"喜界島",     prefecture:"鹿児島県", region:"九州沖縄", lat:28.3194, lng:129.9265, transportId:1, comment:"コミューター路線で",                       defunct:false, defunctNote:null },
  { id:277, seriesId:"saikoro5", origin:"奄美大島", destination:"沖永良部島", prefecture:"鹿児島県", region:"九州沖縄", lat:27.3736, lng:128.6308, transportId:1, comment:"コミューター路線で",                       defunct:false, defunctNote:null },
  { id:278, seriesId:"saikoro5", origin:"奄美大島", destination:"沖縄",       prefecture:"沖縄県",   region:"九州沖縄", lat:26.2124, lng:127.6809, transportId:1, comment:"ついに行くか最南端",                       defunct:false, defunctNote:null },

  // ============================================================
  // saikoro5 - Leg 5-6 大阪発
  // ============================================================
  { id:279, seriesId:"saikoro5", origin:"大阪",     destination:"千歳",       prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"ANA979便で",                               defunct:false, defunctNote:null },
  { id:280, seriesId:"saikoro5", origin:"大阪",     destination:"函館",       prefecture:"北海道",   region:"北海道",   lat:41.7686, lng:140.7288, transportId:5, comment:"日本海1号で",                              defunct:true,  defunctNote:"2012年廃止" },
  { id:281, seriesId:"saikoro5", origin:"大阪",     destination:"越後湯沢",   prefecture:"新潟県",   region:"甲信越",   lat:36.9358, lng:138.8083, transportId:6, comment:"雷鳥89号で",                               defunct:false, defunctNote:null },
  { id:282, seriesId:"saikoro5", origin:"大阪",     destination:"東京",       prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:2, comment:"のぞみ18号で",                             defunct:false, defunctNote:null },
  { id:283, seriesId:"saikoro5", origin:"大阪",     destination:"博多",       prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:2, comment:"のぞみ13号で",                             defunct:false, defunctNote:null },
  { id:284, seriesId:"saikoro5", origin:"大阪",     destination:"宮崎",       prefecture:"宮崎県",   region:"九州沖縄", lat:31.9111, lng:131.4239, transportId:4, comment:"フェリーで",                               defunct:false, defunctNote:null },

  // ============================================================
  // saikoro5 - Leg 5-7 東京発
  // ============================================================
  { id:285, seriesId:"saikoro5", origin:"東京",     destination:"千歳",       prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"JAL最終便",                                defunct:false, defunctNote:null },
  { id:286, seriesId:"saikoro5", origin:"東京",     destination:"千歳",       prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"ANA最終便",                                defunct:false, defunctNote:null },
  { id:287, seriesId:"saikoro5", origin:"東京",     destination:"札幌",       prefecture:"北海道",   region:"北海道",   lat:43.0642, lng:141.3469, transportId:5, comment:"北斗星5号で",                              defunct:true,  defunctNote:"廃止" },
  { id:288, seriesId:"saikoro5", origin:"東京",     destination:"盛岡",       prefecture:"岩手県",   region:"東北",     lat:39.7036, lng:141.1527, transportId:2, comment:"東北新幹線",                               defunct:false, defunctNote:null },
  { id:289, seriesId:"saikoro5", origin:"東京",     destination:"青森",       prefecture:"青森県",   region:"東北",     lat:40.8246, lng:140.7406, transportId:3, comment:"深夜バス東日本チャンピオン「ラフォーレ号」", defunct:false, defunctNote:null },
  { id:290, seriesId:"saikoro5", origin:"東京",     destination:"博多",       prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:3, comment:"キングオブ深夜バス「はかた号」",           defunct:false, defunctNote:null },

  // ============================================================
  // saikoro5 - Leg 5-8 博多発（画像で 3 件のみ可視・3 件欠損の可能性）
  // ============================================================
  { id:291, seriesId:"saikoro5", origin:"博多",     destination:"千歳",       prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"ANA275便",                                 defunct:false, defunctNote:null },
  { id:292, seriesId:"saikoro5", origin:"博多",     destination:"羽田",       prefecture:"東京都",   region:"関東",     lat:35.5494, lng:139.7798, transportId:1, comment:"ふりだしに戻る JAS304",                    defunct:false, defunctNote:null },
  { id:293, seriesId:"saikoro5", origin:"博多",     destination:"対馬",       prefecture:"長崎県",   region:"九州沖縄", lat:34.2009, lng:129.2895, transportId:4, comment:"韓国はすぐそこ",                           defunct:false, defunctNote:null },
  // ============================================================
  // saikoro6 - Leg 6-1 東京発
  // ============================================================
  { id:294, seriesId:"saikoro6", origin:"東京",     destination:"那覇",       prefecture:"沖縄県",   region:"九州沖縄", lat:26.2124, lng:127.6809, transportId:1, comment:"一気に遠くへ",                             defunct:false, defunctNote:null },
  { id:295, seriesId:"saikoro6", origin:"東京",     destination:"徳島",       prefecture:"徳島県",   region:"四国",     lat:34.0658, lng:134.5594, transportId:1, comment:"四国はごめんだ",                           defunct:false, defunctNote:null },
  { id:296, seriesId:"saikoro6", origin:"東京",     destination:"伊豆大島",   prefecture:"東京都",   region:"関東",     lat:34.7508, lng:139.3585, transportId:4, comment:"離島はどうだ",                             defunct:false, defunctNote:null },
  { id:297, seriesId:"saikoro6", origin:"東京",     destination:"博多",       prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:2, comment:"新幹線で",                                 defunct:false, defunctNote:null },
  { id:298, seriesId:"saikoro6", origin:"東京",     destination:"秋田",       prefecture:"秋田県",   region:"東北",     lat:39.7200, lng:140.1025, transportId:2, comment:"新幹線で",                                 defunct:false, defunctNote:null },
  { id:299, seriesId:"saikoro6", origin:"東京",     destination:"千歳",       prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"企画終了",                                 defunct:false, defunctNote:null },

  // ============================================================
  // saikoro6 - Leg 6-2 伊豆大島発
  // ============================================================
  { id:300, seriesId:"saikoro6", origin:"伊豆大島", destination:"調布",       prefecture:"東京都",   region:"関東",     lat:35.6517, lng:139.5443, transportId:1, comment:"戻る NCA102便",                            defunct:false, defunctNote:null },
  { id:301, seriesId:"saikoro6", origin:"伊豆大島", destination:"羽田",       prefecture:"東京都",   region:"関東",     lat:35.5494, lng:139.7798, transportId:1, comment:"もうちょっと大きい飛行機で",               defunct:false, defunctNote:null },
  { id:302, seriesId:"saikoro6", origin:"伊豆大島", destination:"東京",       prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:4, comment:"船で(4時間20分)",                          defunct:false, defunctNote:null },
  { id:303, seriesId:"saikoro6", origin:"伊豆大島", destination:"東京",       prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:4, comment:"船と新幹線で",                             defunct:false, defunctNote:null },
  { id:304, seriesId:"saikoro6", origin:"伊豆大島", destination:"三宅島",     prefecture:"東京都",   region:"関東",     lat:34.0833, lng:139.5167, transportId:1, comment:"ヘリで",                                   defunct:false, defunctNote:null },
  { id:305, seriesId:"saikoro6", origin:"伊豆大島", destination:"利島",       prefecture:"東京都",   region:"関東",     lat:34.5267, lng:139.2818, transportId:1, comment:"ヘリで",                                   defunct:false, defunctNote:null },

  // ============================================================
  // saikoro6 - Leg 6-3 東京発
  // ============================================================
  { id:306, seriesId:"saikoro6", origin:"東京",     destination:"千歳",       prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"直行便 AIRDO15便",                         defunct:false, defunctNote:null },
  { id:307, seriesId:"saikoro6", origin:"東京",     destination:"高知",       prefecture:"高知県",   region:"四国",     lat:33.5597, lng:133.5311, transportId:1, comment:"四国が呼んでる JAL125便",                  defunct:false, defunctNote:null },
  { id:308, seriesId:"saikoro6", origin:"東京",     destination:"大分",       prefecture:"大分県",   region:"九州沖縄", lat:33.2382, lng:131.6126, transportId:5, comment:"寝台特急「富士」",                         defunct:true,  defunctNote:"2009年廃止" },
  { id:309, seriesId:"saikoro6", origin:"東京",     destination:"仙台",       prefecture:"宮城県",   region:"東北",     lat:38.2688, lng:140.8721, transportId:2, comment:"東北新幹線「やまびこ209号」",              defunct:false, defunctNote:null },
  { id:310, seriesId:"saikoro6", origin:"東京",     destination:"新潟",       prefecture:"新潟県",   region:"甲信越",   lat:37.9161, lng:139.0364, transportId:2, comment:"上越新幹線「あさひ345号」",                defunct:false, defunctNote:null },
  { id:311, seriesId:"saikoro6", origin:"東京",     destination:"那智勝浦",   prefecture:"和歌山県", region:"近畿",     lat:33.6306, lng:135.9362, transportId:4, comment:"フェリーで",                               defunct:true,  defunctNote:"2001年廃止" },

  // ============================================================
  // saikoro6 - Leg 6-4 高知発
  // ============================================================
  { id:312, seriesId:"saikoro6", origin:"高知",     destination:"一泊",       prefecture:"高知県",   region:"四国",     lat:33.5597, lng:133.5311, transportId:7, comment:"高知で",                                   defunct:false, defunctNote:null },
  { id:313, seriesId:"saikoro6", origin:"高知",     destination:"東京",       prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:1, comment:"JAL126便で",                               defunct:false, defunctNote:null },
  { id:314, seriesId:"saikoro6", origin:"高知",     destination:"西広島",     prefecture:"広島県",   region:"中国",     lat:34.3897, lng:132.4119, transportId:1, comment:"ジェイエアーで",                           defunct:true,  defunctNote:"2005年撤退" },
  { id:315, seriesId:"saikoro6", origin:"高知",     destination:"高松",       prefecture:"香川県",   region:"四国",     lat:34.3428, lng:134.0462, transportId:6, comment:"特急「しまんと」",                         defunct:false, defunctNote:null },
  { id:316, seriesId:"saikoro6", origin:"高知",     destination:"大阪",       prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:3, comment:"出ました!地獄の深夜バス「よさこい号」",     defunct:false, defunctNote:null },
  { id:317, seriesId:"saikoro6", origin:"高知",     destination:"東京",       prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:3, comment:"出ました!深夜バス「ドリーム高知号」",       defunct:false, defunctNote:null },

  // ============================================================
  // saikoro6 - Leg 6-5 大阪発
  // ============================================================
  { id:318, seriesId:"saikoro6", origin:"大阪",     destination:"法隆寺",     prefecture:"奈良県",   region:"近畿",     lat:34.6122, lng:135.7339, transportId:6, comment:"ちょっと観光奈良",                         defunct:false, defunctNote:null },
  { id:319, seriesId:"saikoro6", origin:"大阪",     destination:"千歳",       prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"直行便 JAL871便",                          defunct:false, defunctNote:null },
  { id:320, seriesId:"saikoro6", origin:"大阪",     destination:"盛岡",       prefecture:"岩手県",   region:"東北",     lat:39.7036, lng:141.1527, transportId:2, comment:"新幹線で一気に",                           defunct:false, defunctNote:null },
  { id:321, seriesId:"saikoro6", origin:"大阪",     destination:"博多",       prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:2, comment:"新幹線で",                                 defunct:false, defunctNote:null },
  { id:322, seriesId:"saikoro6", origin:"大阪",     destination:"徳島",       prefecture:"徳島県",   region:"四国",     lat:34.0658, lng:134.5594, transportId:3, comment:"明石海峡大橋で",                           defunct:false, defunctNote:null },
  { id:323, seriesId:"saikoro6", origin:"大阪",     destination:"高松",       prefecture:"香川県",   region:"四国",     lat:34.3428, lng:134.0462, transportId:6, comment:"瀬戸大橋で",                               defunct:false, defunctNote:null },

  // ============================================================
  // saikoro6 - Leg 6-6 法隆寺発
  // ============================================================
  { id:324, seriesId:"saikoro6", origin:"法隆寺",   destination:"京都",       prefecture:"京都府",   region:"近畿",     lat:35.0116, lng:135.7681, transportId:6, comment:"湯どうふ",                                 defunct:false, defunctNote:null },
  { id:325, seriesId:"saikoro6", origin:"法隆寺",   destination:"下関",       prefecture:"山口県",   region:"中国",     lat:33.9577, lng:130.9416, transportId:2, comment:"ふぐさし",                                 defunct:false, defunctNote:null },
  { id:326, seriesId:"saikoro6", origin:"法隆寺",   destination:"南紀白浜",   prefecture:"和歌山県", region:"近畿",     lat:33.6839, lng:135.3833, transportId:6, comment:"海がきれいな",                             defunct:false, defunctNote:null },
  { id:327, seriesId:"saikoro6", origin:"法隆寺",   destination:"飛騨高山",   prefecture:"岐阜県",   region:"東海",     lat:36.1461, lng:137.2523, transportId:6, comment:"合掌造りの",                               defunct:false, defunctNote:null },
  { id:328, seriesId:"saikoro6", origin:"法隆寺",   destination:"有馬温泉",   prefecture:"兵庫県",   region:"近畿",     lat:34.7990, lng:135.2477, transportId:6, comment:"ゆっくり温泉",                             defunct:false, defunctNote:null },
  { id:329, seriesId:"saikoro6", origin:"法隆寺",   destination:"松山",       prefecture:"愛媛県",   region:"四国",     lat:33.8416, lng:132.7657, transportId:2, comment:"しまなみ海道で",                           defunct:false, defunctNote:null },

  // ============================================================
  // saikoro6 - Leg 6-7 松山発
  // ============================================================
  { id:330, seriesId:"saikoro6", origin:"松山",     destination:"東京",       prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:1, comment:"そろそろ帰るぞ 飛行機で",                  defunct:false, defunctNote:null },
  { id:331, seriesId:"saikoro6", origin:"松山",     destination:"東京",       prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:5, comment:"列車でいいから帰るぞ寝台特急「サンライズ瀬戸」", defunct:false, defunctNote:null },
  { id:332, seriesId:"saikoro6", origin:"松山",     destination:"大阪",       prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:1, comment:"少しでも近くへANA448便",                   defunct:false, defunctNote:null },
  { id:333, seriesId:"saikoro6", origin:"松山",     destination:"大阪",       prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:4, comment:"船でもいいから近くへ関西汽船で",           defunct:false, defunctNote:null },
  { id:334, seriesId:"saikoro6", origin:"松山",     destination:"宇和島",     prefecture:"愛媛県",   region:"四国",     lat:33.2236, lng:132.5606, transportId:6, comment:"もっと四国 特急「宇和海17号」",             defunct:false, defunctNote:null },
  { id:335, seriesId:"saikoro6", origin:"松山",     destination:"博多",       prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:1, comment:"いっそ九州 JAS874便",                      defunct:false, defunctNote:null },

  // ============================================================
  // saikoro6 - Leg 6-8 東京発
  // ============================================================
  { id:336, seriesId:"saikoro6", origin:"東京",     destination:"千歳",       prefecture:"北海道",   region:"北海道",   lat:42.8204, lng:141.6520, transportId:1, comment:"直行便",                                   defunct:false, defunctNote:null },
  { id:337, seriesId:"saikoro6", origin:"東京",     destination:"弘前",       prefecture:"青森県",   region:"東北",     lat:40.6031, lng:140.4640, transportId:3, comment:"ノクターン号",                             defunct:false, defunctNote:null },
  { id:338, seriesId:"saikoro6", origin:"東京",     destination:"盛岡",       prefecture:"岩手県",   region:"東北",     lat:39.7036, lng:141.1527, transportId:3, comment:"ビーム1",                                  defunct:false, defunctNote:null },
  { id:339, seriesId:"saikoro6", origin:"東京",     destination:"高知",       prefecture:"高知県",   region:"四国",     lat:33.5597, lng:133.5311, transportId:3, comment:"ブルーメッツ号",                           defunct:false, defunctNote:null },
  { id:340, seriesId:"saikoro6", origin:"東京",   destination:"博多",   prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:3, comment:"はかた号",                                 defunct:false, defunctNote:null },
  { id:341, seriesId:"saikoro6", origin:"東京",   destination:"一泊",   prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:7, comment:"東京",                                     defunct:false, defunctNote:null },

  // ============================================================
  // saikoro6 - Leg 6-9 弘前発（画像で 2 件のみ可視・4 件欠損の可能性）
  // ============================================================
  { id:342, seriesId:"saikoro6", origin:"弘前",   destination:"札幌",   prefecture:"北海道",   region:"北海道",   lat:43.0642, lng:141.3469, transportId:5, comment:"津軽海峡を越えてゴール", defunct:false, defunctNote:null },
  { id:343, seriesId:"saikoro6", origin:"弘前",   destination:"博多",   prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:1, comment:"青森空港発 JAS914便で",                    defunct:false, defunctNote:null },

  // ============================================================
  // saikoro6 - Leg 6-10 博多発
  // ============================================================
  { id:344, seriesId:"saikoro6", origin:"博多",   destination:"東京",   prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:1, comment:"JAL368便で",                               defunct:false, defunctNote:null },
  { id:345, seriesId:"saikoro6", origin:"博多",   destination:"那覇",   prefecture:"沖縄県",   region:"九州沖縄", lat:26.2124, lng:127.6809, transportId:1, comment:"ANA129便で",                               defunct:false, defunctNote:null },
  { id:346, seriesId:"saikoro6", origin:"博多",   destination:"大阪",   prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:2, comment:"「のぞみ28号」で",                         defunct:false, defunctNote:null },
  { id:347, seriesId:"saikoro6", origin:"博多",   destination:"長崎",   prefecture:"長崎県",   region:"九州沖縄", lat:32.7448, lng:129.8737, transportId:6, comment:"特急「かもめ33号」で",                     defunct:false, defunctNote:null },
  { id:348, seriesId:"saikoro6", origin:"博多",   destination:"対馬",   prefecture:"長崎県",   region:"九州沖縄", lat:34.2009, lng:129.2895, transportId:4, comment:"九州汽船で",                               defunct:false, defunctNote:null },
  { id:349, seriesId:"saikoro6", origin:"博多",   destination:"東京",   prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:3, comment:"キングオブ深夜バス「はかた号」",           defunct:false, defunctNote:null },

  // ============================================================
  // saikoro6 - Leg 6-11 大阪発
  // ============================================================
  { id:350, seriesId:"saikoro6", origin:"大阪",   destination:"高知",   prefecture:"高知県",   region:"四国",     lat:33.5597, lng:133.5311, transportId:3, comment:"深夜バス「よさこい号」",                   defunct:false, defunctNote:null },
  { id:351, seriesId:"saikoro6", origin:"大阪",   destination:"長崎",   prefecture:"長崎県",   region:"九州沖縄", lat:32.7448, lng:129.8737, transportId:3, comment:"深夜バス「オランダ号」",                   defunct:false, defunctNote:null },
  { id:352, seriesId:"saikoro6", origin:"大阪",   destination:"新潟",   prefecture:"新潟県",   region:"甲信越",   lat:37.9161, lng:139.0364, transportId:3, comment:"深夜バス「おけさ号」",                     defunct:false, defunctNote:null },
  { id:353, seriesId:"saikoro6", origin:"大阪", destination:"博多", prefecture:"福岡県", region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:3, comment:"深夜バス「ムーンライト」", defunct:false, defunctNote:null },
  { id:354, seriesId:"saikoro6", origin:"大阪", destination:"東京", prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:1, comment:"ANA976便で",         defunct:false, defunctNote:null },
  { id:355, seriesId:"saikoro6", origin:"大阪", destination:"一泊", prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:7, comment:"頼むぞ! 大阪",      defunct:false, defunctNote:null },
];
