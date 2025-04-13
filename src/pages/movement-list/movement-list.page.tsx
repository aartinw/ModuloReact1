import { AppLayout } from "@/layouts";
import React from "react";
import { MovementVm } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components";
import { getAMovementList } from "./api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { useParams } from "react-router-dom";
import { getAccountList } from "../account-list/api";
import { AccountVm } from "../account-list/account-list.vm";
import { mapAcountFromApiToVm } from "../account-list/account-list.mapper";

export const MovementListPage: React.FC = () => {
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const [accountInfo, setAccountInfo] = React.useState<AccountVm>();
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (id) {
      getAMovementList(id).then((result) =>
        setMovementList(mapMovementListFromApiToVm(result))
      );
      getAccountList().then((result) => {
        const account = result.find((account) => account.id === id);
        debugger;
        if (account) {
          setAccountInfo(mapAcountFromApiToVm(account));
        }
      });
    }
  }, [id]);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.informacion}>
            <h4>SALDO DISPONBLE</h4>
            <h2>{accountInfo?.balance} €</h2>
          </div>
        </div>
        <div className={classes.afterHeader}>
          <span>Alias: Gastos mes</span>
          <span>IBAN: {accountInfo?.iban}</span>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
