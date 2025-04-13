import * as apiModel from "./api/account-list.api-model";
import * as viewModel from "./account-list.vm";

export const mapAcountListFromApiToVm = (
  accountList: apiModel.Account[]
): viewModel.AccountVm[] =>
  accountList.map((account) => ({
    id: account.id,
    iban: account.iban,
    name: account.name,
    balance: account.balance.toString(),
    lastTransaction: new Date(account.lastTransaction),
  }));

export const mapAcountFromApiToVm = (account: apiModel.Account) => ({
  id: account.id,
  iban: account.iban,
  name: account.name,
  balance: account.balance.toString(),
  lastTransaction: new Date(account.lastTransaction),
});
