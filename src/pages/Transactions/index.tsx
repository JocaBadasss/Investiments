import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import {
  PriceHightLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm/>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width={'50%'}>Investir</td>
              <td>
                <PriceHightLight variant='income'>R$ 2.000,00</PriceHightLight>
              </td>
              <td>Investimentos</td>
              <td>09/05/2024</td>
            </tr>
            <tr>
              <td width={'50%'}>PETR4</td>
              <td>
                <PriceHightLight variant='outcome'>- R$ 41,70</PriceHightLight>
              </td>
              <td>Ação</td>
              <td>09/05/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};
