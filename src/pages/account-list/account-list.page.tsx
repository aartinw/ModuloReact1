import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm } from "./account-list.vm";
import classes from "./account-list.page.module.css";
import { AccountListTableComponent } from "./components";
import { getAccountList } from "./api";
import { mapAcountListFromApiToVm } from "./account-list.mapper";

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    getAccountList().then((result) =>
      setAccountList(mapAcountListFromApiToVm(result))
    );
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Mis cuentas</h1>
          <button>AGREGAR NUEVA CUENTA</button>
        </div>
        <AccountListTableComponent accountList={accountList} />
      </div>
    </AppLayout>
  );
};
