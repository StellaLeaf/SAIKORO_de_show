// 必要なものをimportする
// ReactからuseStateとuseCallbackを使う
// ../data/routes から getRoutesByOrigin と getRoute を使う
// ../data/transports から TRANSPORTS を使う
import {useState, useCallback} from "react";
import { getRoutesByOrigin, getRoute } from "../data/routes";
import { TRANSPORTS } from "../data/transports";
//PHASEの定義
export const PHASE = {
  READY:  'READY',
  DONE:   'DONE'
}
//初期状態の定義
const INITIAL_STATE = {
  phase:        PHASE.READY,
  origin:       '東京',
  diceValue:    null,
  rolling:      false,
  selectedRoute:null,
  history:      [],
  hideDefunct:  true,  // ←（デフォルトは廃止非表示）
};

export const useDice = () => {
  //stateを定義して初期値を代入
  const [state, setState] = useState(INITIAL_STATE);
  //stateの更新用
  const update = useCallback((patch) => {
    setState(prev => ({ ...prev, ...patch }));
  }, []);
  //origin以外を初期化
  const setOrigin = useCallback((origin) => {
    setState(prev => ({
      ...INITIAL_STATE,
      origin: origin,
      history: prev.history,
      hideDefunct: prev.hideDefunct,  // ← 追加！！
    }));
  }, []);

  const setHideDefunct = useCallback((value) => {
    setState(prev => ({ ...prev, hideDefunct: value }));
  }, []);

  const roll = useCallback(async () => {
    // 連打防止
    if (state.rolling || state.phase === PHASE.DONE) return;

    // 開始通告
    update({ rolling: true, diceValue: null, selectedRoute: null });

    // アニメーション（160msごとに1〜6でランダム表示）
    const wait = (ms) => new Promise(r => setTimeout(r, ms));
    for (let i = 0; i < 10; i++) {
      update({ diceValue: Math.floor(Math.random() * 6) + 1 });
      await wait(160);
    }

    // 確定振り目
    const finalValue = Math.floor(Math.random() * 6) + 1;
    const route = getRoute(state.origin, finalValue, { hideDefunct: state.hideDefunct });
    const transport  = TRANSPORTS.find(t => t.id === route.transportId);

    // 新しい leg を作成
    const newLeg = { route, transport, diceValue: finalValue };

    // 履歴を旅単位で更新
    const lastJourney  = state.history[state.history.length - 1];
    const isSameOrigin = lastJourney && lastJourney.origin === state.origin;

    const newHistory = isSameOrigin
      ? state.history.map((j, i) =>
          i === state.history.length - 1
            ? { ...j, legs: [...j.legs, newLeg] }
            : j
        )
      : [...state.history, { origin: state.origin, legs: [newLeg] }];

    // 旅は最大10本キープ
    const trimmedHistory = newHistory.slice(-10);

    // state 確定
    update({
      rolling:       false,
      diceValue:     finalValue,
      selectedRoute: route,
      phase:         PHASE.DONE,
      history:       trimmedHistory,
    });
  }, [state, update]);

  const reset = useCallback(() => {
    setState(prev => ({
      ...INITIAL_STATE,
      origin:      prev.origin,
      history:     prev.history,
      hideDefunct: prev.hideDefunct,  // ← 設定維持
    }));
  }, []); 
  const currentRoutes = getRoutesByOrigin(state.origin, {
    hideDefunct: state.hideDefunct,
  });
  const selectedTransport = state.selectedRoute
    ? TRANSPORTS.find(t => t.id === state.selectedRoute.transportId)
    : null;
  
  return {
    phase:             state.phase,
    origin:            state.origin,
    diceValue:         state.diceValue,
    rolling:           state.rolling,
    selectedRoute:     state.selectedRoute,
    selectedTransport,
    currentRoutes,
    history:           state.history,
    hideDefunct:       state.hideDefunct,  // ← 追加
    setOrigin,
    setHideDefunct,                         // ← 追加
    roll,
    reset,
  };
};