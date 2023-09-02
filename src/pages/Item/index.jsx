import { CardWrapper } from '@components/CardWrapper';
import Main from '@components/Main';
import StoreItemExpanded from '@components/StoreItemExpanded';

export default function ItemPage() {
  return (
    <Main>
      <CardWrapper>
        <StoreItemExpanded />
      </CardWrapper>
    </Main>
  );
}
