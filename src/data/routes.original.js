// ============================================================
// 本家サイコロの旅データ
// 番組内で実際に使われたサイコロボード（saikoro1, saikoro2...）
// 廃止情報は調査済み。要更新時はここに反映。
// ============================================================
export const ROUTES_ORIGINAL = [
  // ============================================================
  // Leg 1-1  東京発
  // ============================================================
  { id:1,  seriesId:"saikoro1", origin:"東京",   destination:"青森",         prefecture:"青森県",   region:"東北",     lat:40.8246, lng:140.7406, transportId:3, comment:"ラ・フォーレ",                       defunct:false,  defunctNote:"「ドリーム青森・東京号」に改称、運行中" },
  { id:2,  seriesId:"saikoro1", origin:"東京",   destination:"新潟",         prefecture:"新潟県",   region:"甲信越",   lat:37.9161, lng:139.0364, transportId:3, comment:"Weライナー",                         defunct:false, defunctNote:null },
  { id:3,  seriesId:"saikoro1", origin:"東京",   destination:"松山",         prefecture:"愛媛県",   region:"四国",     lat:33.8416, lng:132.7657, transportId:3, comment:"オレンジライナー",                   defunct:false, defunctNote:null },
  { id:4,  seriesId:"saikoro1", origin:"東京",   destination:"盛岡",         prefecture:"岩手県",   region:"東北",     lat:39.7036, lng:141.1527, transportId:3, comment:"らくちん",                           defunct:true,  defunctNote:"2021年運休。代替は「ドリーム青森/盛岡・東京号」が盛岡経由で現存" },
  { id:5,  seriesId:"saikoro1", origin:"東京",   destination:"下関",         prefecture:"山口県",   region:"中国",     lat:33.9508, lng:130.9264, transportId:3, comment:"ドリームふくふく",                   defunct:true,  defunctNote:"2006年廃止。代替は大阪発の「サンアンドムーン号」が現存" },
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
  { id:15, seriesId:"saikoro1", origin:"臼杵",   destination:"名古屋",       prefecture:"愛知県",   region:"東海",     lat:35.1815, lng:136.9066, transportId:3, comment:"地獄の深夜バス「ぶんご号」",         defunct:true,  defunctNote:"2016年廃止。代替は大分初大阪着の「SORIN号」が現存" },
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
  { id:38, seriesId:"saikoro2", origin:"東京",    destination:"花巻",   prefecture:"岩手県",   region:"東北",     lat:39.3886, lng:141.1170, transportId:3, comment:"深夜バス「イーハートーブ号」",       defunct:true, defunctNote:"2024年運行終了。北上経由の夜行バスで代替" },
  { id:39, seriesId:"saikoro2", origin:"東京",    destination:"徳島",   prefecture:"徳島県",   region:"四国",     lat:34.0658, lng:134.5593, transportId:3, comment:"深夜バス「エディー号」",             defunct:false, defunctNote:"2021年運休。代替の夜行バス多数" },
  { id:40, seriesId:"saikoro2", origin:"東京",    destination:"千歳",   prefecture:"北海道",   region:"北海道",   lat:42.8233, lng:141.6511, transportId:1, comment:"JALで行く夢の直行便",                defunct:false, defunctNote:null },
  { id:41, seriesId:"saikoro2", origin:"東京",    destination:"神戸",   prefecture:"兵庫県",   region:"近畿",     lat:34.6901, lng:135.1956, transportId:2, comment:"新幹線グリーン車で行く",             defunct:false, defunctNote:null },
  { id:42, seriesId:"saikoro2", origin:"東京",    destination:"苫小牧", prefecture:"北海道",   region:"北海道",   lat:42.6333, lng:141.6044, transportId:4, comment:"30時間フェリーの旅",                 defunct:false, defunctNote:null },

  // ============================================================
  // Leg 2-2  神戸発（全目バス）
  // ============================================================
  { id:43, seriesId:"saikoro2", origin:"神戸",    destination:"徳島",   prefecture:"徳島県",   region:"四国",     lat:34.0658, lng:134.5593, transportId:3, comment:"サラダエクスプレス",                 defunct:false, defunctNote:null },
  { id:44, seriesId:"saikoro2", origin:"神戸",    destination:"高知",   prefecture:"高知県",   region:"四国",     lat:33.5597, lng:133.5311, transportId:3, comment:"よさこい号",                         defunct:false, defunctNote:null },
  { id:45, seriesId:"saikoro2", origin:"神戸",    destination:"熊本",   prefecture:"熊本県",   region:"九州沖縄", lat:32.7898, lng:130.7417, transportId:3, comment:"レッツ号",                           defunct:false, defunctNote:"2010年運休。代替は「サンライズ号」" },
  { id:46, seriesId:"saikoro2", origin:"神戸",    destination:"東京",   prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:3, comment:"プリンセスロード",                   defunct:false, defunctNote:null },
  { id:47, seriesId:"saikoro2", origin:"神戸",    destination:"下関",   prefecture:"山口県",   region:"中国",     lat:33.9508, lng:130.9264, transportId:3, comment:"ふくふく号",                         defunct:false, defunctNote:"2013年運休。代替は「サンアンドムーン号」" },
  { id:48, seriesId:"saikoro2", origin:"神戸",    destination:"東京",   prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:3, comment:"ドリーム神戸号",                     defunct:false, defunctNote:null },

  // ============================================================
  // Leg 2-3  熊本発
  // ============================================================
  { id:49, seriesId:"saikoro2", origin:"熊本",    destination:"千歳",   prefecture:"北海道",   region:"北海道",   lat:42.8233, lng:141.6511, transportId:1, comment:"夢の直行便",                         defunct:false, defunctNote:null },
  { id:50, seriesId:"saikoro2", origin:"熊本",    destination:"宿毛",   prefecture:"高知県",   region:"四国",     lat:32.9383, lng:132.7264, transportId:4, comment:"読み方がわからん",                   defunct:false, defunctNote:null },
  { id:51, seriesId:"saikoro2", origin:"熊本",    destination:"牛深",   prefecture:"熊本県",   region:"九州沖縄", lat:32.2014, lng:130.0283, transportId:3, comment:"それは、どこ？",                     defunct:false, defunctNote:null },
  { id:52, seriesId:"saikoro2", origin:"熊本",    destination:"博多",   prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:6, comment:"ちょっとでも戻りたい",               defunct:false, defunctNote:null },
  { id:53, seriesId:"saikoro2", origin:"熊本",    destination:"広島",   prefecture:"広島県",   region:"中国",     lat:34.3853, lng:132.4553, transportId:2, comment:"もう少し戻りたい",                   defunct:false, defunctNote:null },
  { id:54, seriesId:"saikoro2", origin:"熊本",    destination:"鹿児島", prefecture:"鹿児島県", region:"九州沖縄", lat:31.5966, lng:130.5571, transportId:6, comment:"このさい遠くへ",                     defunct:false, defunctNote:null },

  // ============================================================
  // Leg 2-4  宿毛発
  // ============================================================
  { id:55, seriesId:"saikoro2", origin:"宿毛",    destination:"別府",   prefecture:"大分県",   region:"九州沖縄", lat:33.2846, lng:131.5006, transportId:4, comment:"九州へ戻る",                         defunct:false, defunctNote:null },
  { id:56, seriesId:"saikoro2", origin:"宿毛",    destination:"岡山",   prefecture:"岡山県",   region:"中国",     lat:34.6617, lng:133.9350, transportId:6, comment:"本州へ戻る",                         defunct:false, defunctNote:null },
  { id:57, seriesId:"saikoro2", origin:"宿毛",    destination:"高知",   prefecture:"高知県",   region:"四国",     lat:33.5597, lng:133.5311, transportId:6, comment:"四国を満喫",                         defunct:false, defunctNote:null },
  { id:58, seriesId:"saikoro2", origin:"宿毛",    destination:"東京",   prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:1, comment:"とっとと帰る",                       defunct:false, defunctNote:null },
  { id:59, seriesId:"saikoro2", origin:"宿毛",    destination:"大阪",   prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:4, comment:"ゆっくり帰る(10時間フェリーの旅)",   defunct:false, defunctNote:null },
  { id:60, seriesId:"saikoro2", origin:"宿毛",    destination:"名古屋", prefecture:"愛知県",   region:"東海",     lat:35.1815, lng:136.9066, transportId:6, comment:"もうちょっと早く帰る(JR乗り継ぎ)",   defunct:false, defunctNote:null },
  // ============================================================
  // Leg 2-5  高知発
  // ============================================================
  { id:61, seriesId:"saikoro2", origin:"高知",    destination:"高知一泊", prefecture:"高知県",   region:"四国",     lat:33.5597, lng:133.5311, transportId:7, comment:"龍馬まつりもやっている",                       defunct:false, defunctNote:null },
  { id:62, seriesId:"saikoro2", origin:"高知",    destination:"高松",     prefecture:"香川県",   region:"四国",     lat:34.3428, lng:134.0462, transportId:6, comment:"いや、少しでも戻ろう",                         defunct:false, defunctNote:null },
  { id:63, seriesId:"saikoro2", origin:"高知",    destination:"大阪",     prefecture:"大阪府",   region:"近畿",     lat:34.6937, lng:135.5023, transportId:4, comment:"もう少し戻ろう(フェリー9時間)",                defunct:false, defunctNote:null },
  { id:64, seriesId:"saikoro2", origin:"高知",    destination:"東京",     prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:4, comment:"気長に戻ろう(フェリー20時間)",                 defunct:false, defunctNote:null },
  { id:65, seriesId:"saikoro2", origin:"高知",    destination:"京都",     prefecture:"京都府",   region:"近畿",     lat:34.9858, lng:135.7588, transportId:6, comment:"寝台なしの快速列車「ムーンライト高知」",        defunct:true, defunctNote:"2009年廃止" },
  { id:66, seriesId:"saikoro2", origin:"高知",    destination:"博多",     prefecture:"福岡県",   region:"九州沖縄", lat:33.5904, lng:130.4017, transportId:3, comment:"地獄の深夜バスで九州逆戻り",                   defunct:false, defunctNote:null },

  // ============================================================
  // Leg 2-6  博多発
  // ============================================================
  { id:67, seriesId:"saikoro2", origin:"博多",   destination:"鹿児島",   prefecture:"鹿児島県", region:"九州沖縄", lat:31.5966, lng:130.5571, transportId:6, comment:"札幌はずっと遠いぞ",                           defunct:false, defunctNote:null },
  { id:68, seriesId:"saikoro2", origin:"博多",   destination:"白石島",   prefecture:"岡山県",   region:"中国",     lat:34.3614, lng:133.5942, transportId:6, comment:"名前は札幌に近いぞ",                           defunct:false, defunctNote:null },
  { id:69, seriesId:"saikoro2", origin:"博多",   destination:"直江津",   prefecture:"新潟県",   region:"甲信越",   lat:37.1758, lng:138.2353, transportId:4, comment:"フェリーで21時間",                             defunct:false, defunctNote:null },
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
  { id:80, seriesId:"saikoro2", origin:"徳島",    destination:"東京",       prefecture:"東京都",   region:"関東",     lat:35.6812, lng:139.7671, transportId:3, comment:"寝台バス3連発「エディー号」",        defunct:true, defunctNote:"2021年運休。代替の夜行バス多数" },
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
];