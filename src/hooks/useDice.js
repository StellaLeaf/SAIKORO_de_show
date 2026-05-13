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
    setState({...INITIAL_STATE, origin: origin });
  }, []);

  const roll = useCallback(async () => {
    //連打防止
    if (state.rolling || state.phase === PHASE.DONE) return;
    //開始通告
    update({ rolling: true, diceValue: null, selectedRoute: null })
    //80msごとにdiceValueを1~6で10回ランダム
    const wait = (ms) => new Promise(r => setTimeout(r, ms));
    for (let i = 0; i < 10; i++) {
      update({ diceValue: Math.floor(Math.random() * 6) + 1 });
      await wait(80);
    }
    //確定振り目
    const finalValue = Math.floor(Math.random() * 6) + 1;
    //確定振り目の行き先
    const route      = getRoute(state.origin, finalValue);
    //一致する移動パターンの検索
    const transport = TRANSPORTS.find(t => t.id === route.transportId);
    //リセット
    update ({
      rolling:      false,
      diceValue:    finalValue,
      selectedRoute:route,
      phase:        PHASE.DONE,
      history:      [...state.history, { route, transport }].slice(-10)
    });
  }, [state, update]);

  const reset = useCallback(() => {
    setState({...INITIAL_STATE, origin: state.origin, history: state.history});
  }, [state.origin, state.history]);
  const currentRoutes = getRoutesByOrigin(state.origin);
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
    setOrigin,
    roll,
    reset,
  };
};