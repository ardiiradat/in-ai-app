// src/state/usePortoState.js
import { useMemo } from "react";
import { atom, useAtom } from "jotai";
import getDummyData from "../hooks/getDummyData";
import getCurrentTabData from "../hooks/getCurrentTabData";

// Create atoms
const netAssetsTabValueAtom = atom(0);
const portoPerformTabValueAtom = atom(0);
const grossIncomeTabValueAtom = atom(0);

const createNetAssetsDataAtom = (dummyData) =>
  atom((get) => {
    const tabValue = get(netAssetsTabValueAtom);
    const regionData =
      {
        1: dummyData.australia,
        2: dummyData.usa,
        3: dummyData.europe,
        0: dummyData.all,
      }[tabValue] || dummyData.all;
    return regionData;
  });

const createPortoDataAtom = (dummyData) =>
  atom((get) => {
    const tabValue = get(portoPerformTabValueAtom);
    const netAssetsData = get(
      createNetAssetsDataAtom(dummyData)
    ).portoPerformance;
    const performanceData =
      {
        1: netAssetsData.realised,
        2: netAssetsData.unrealised,
        0: netAssetsData.all,
      }[tabValue] || netAssetsData.all;
    return performanceData;
  });

const createGrossIncomeDataAtom = (dummyData) =>
  atom((get) => {
    const netAssetsTab = get(netAssetsTabValueAtom);
    const grossIncomeTab = get(grossIncomeTabValueAtom);
    return getCurrentTabData(dummyData, netAssetsTab, grossIncomeTab);
  });

export const usePortoState = () => {
  const dummyData = useMemo(() => getDummyData(), []);

  const netAssetsDataAtom = useMemo(
    () => createNetAssetsDataAtom(dummyData),
    [dummyData]
  );
  const portoDataAtom = useMemo(
    () => createPortoDataAtom(dummyData),
    [dummyData]
  );
  const grossIncomeDataAtom = useMemo(
    () => createGrossIncomeDataAtom(dummyData),
    [dummyData]
  );

  return {
    useNetAssetsTabValue: () => useAtom(netAssetsTabValueAtom),
    usePortoPerformTabValue: () => useAtom(portoPerformTabValueAtom),
    useGrossIncomeTabValue: () => useAtom(grossIncomeTabValueAtom),
    useNetAssetsData: () => useAtom(netAssetsDataAtom),
    usePortoData: () => useAtom(portoDataAtom),
    useGrossIncomeData: () => useAtom(grossIncomeDataAtom),
  };
};
