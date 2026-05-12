// src/hooks/useDice.js
import { useState, useCallback } from "react";
import { getRoutesByOrigin, getRoute } from "../data/routes";
import { TRANSPORTS } from "../data/transports";

export const PHASE = {
  READY: "READY",
  DONE:  "DONE",
};

const INITIAL_STATE = {
  phase:         "READY",
  origin:        "東京",
  diceValue:     null,
  rolling:       false,
  selectedRoute: null,
  history:       [],
};

export const useDice = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const update = useCallback((patch) => {
    setState(prev => ({ ...prev, ...patch }));
  }, []);

  const setOrigin = useCallback((origin) => {
    setState({ ...INITIAL_STATE, origin });
  }, []);

  const roll = useCallback(async () => {
    if (state.rolling || state.phase === "DONE") return;

    const wait = (ms) => new Promise(r => setTimeout(r, ms));

    update({ rolling: true, diceValue: null, selectedRoute: null });

    for (let i = 0; i < 10; i++) {
      update({ diceValue: Math.floor(Math.random() * 6) + 1 });
      await wait(80);
    }

    const finalValue = Math.floor(Math.random() * 6) + 1;
    const route      = getRoute(state.origin, finalValue);
    const transport  = TRANSPORTS.find(t => t.id === route.transportId);

    update({
      rolling:       false,
      diceValue:     finalValue,
      selectedRoute: route,
      phase:         "DONE",
      history: [...state.history, { route, transport }].slice(-10),
    });
  }, [state, update]);

  const reset = useCallback(() => {
    setState({
      ...INITIAL_STATE,
      origin:  state.origin,
      history: state.history,
    });
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