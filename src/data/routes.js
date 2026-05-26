// ============================================================
// SAIKORO_de_show ルートデータ集約
// ============================================================
import { ROUTES_MANUAL }   from "./routes.manual";
import { ROUTES_ORIGINAL } from "./routes.original";
import { ROUTES_GTFS }     from "./routes.gtfs.cache";

// 全ルート統合（手書き→本家→GTFSの優先順）
export const ROUTES = [
  ...ROUTES_MANUAL,
  ...ROUTES_ORIGINAL,
  ...ROUTES_GTFS,
];

// ============================================================
// ユーティリティ関数
// ============================================================

// 一意キー（seriesId + id）を生成
export const getRouteKey = (route) => `${route.seriesId}-${route.id}`;

// 全出発地一覧（重複排除）
export const getOrigins = () =>
  [...new Set(ROUTES.map(r => r.origin))];

// 6件揃う出発地のみ（プレイ可能）
export const getPlayableOrigins = () =>
  getOrigins().filter(o => getRoutesByOrigin(o).length >= 6);

// 出発地から最大6件のルートを取得
// 手書き(manual)優先 → 本家(saikoro*)で補完 → GTFSで補完
export const getRoutesByOrigin = (origin, options = {}) => {
  const {
    hideDefunct = true,
    useGtfsFill = true,
  } = options;
  const pick = (seriesIdFilter) =>
    ROUTES.filter(
      r =>
        r.origin === origin &&
        seriesIdFilter(r.seriesId) &&
        (!r.defunct || !hideDefunct)
    );

  const manual   = pick(s => s === "manual");
  const original = pick(s => s.startsWith("saikoro"));
  const gtfs     = useGtfsFill ? pick(s => s === "gtfs") : [];

  return [...manual, ...original, ...gtfs].slice(0, 6);
};

// サイコロの目から1件取得（index = diceNum - 1）
export const getRoute = (origin, diceNum) =>
  getRoutesByOrigin(origin)[diceNum - 1];

// 地域フィルター
export const filterByRegion = (region) =>
  ROUTES.filter(r => r.region === region);

// 全シリーズ一覧
export const getAllSeries = () =>
  [...new Set(ROUTES.map(r => r.seriesId))];

// 廃止集計
export const getDefunctStats = () => ({
  total:   ROUTES.length,
  active:  ROUTES.filter(r => !r.defunct).length,
  defunct: ROUTES.filter(r =>  r.defunct).length,
});