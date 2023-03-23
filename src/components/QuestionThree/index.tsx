import * as Styled from "./styles";
export function QuestionThree() {
  return (
    <Styled.Container>
      <Styled.Header>
        <h2>Header</h2>
      </Styled.Header>
      <Styled.Section>
        <Styled.AsideWrapper>
          <Styled.Hero>
            <h2>Hero</h2>
          </Styled.Hero>
          <Styled.Sidebar>
            <h2>Sidebar</h2>
          </Styled.Sidebar>
        </Styled.AsideWrapper>
        <Styled.MainContentWrapper>
          <Styled.MainContent>
            <h2>Main Content</h2>
            <p>
              **If things do not look right, make sure your browser is in
              "Experimental Mode"
            </p>
          </Styled.MainContent>
          <Styled.ExtraContent>
            <h2>Extra Content</h2>
          </Styled.ExtraContent>
        </Styled.MainContentWrapper>
      </Styled.Section>
      <Styled.SectionTwo>
        <Styled.RelatedImages>
          <h2>Related Images</h2>
        </Styled.RelatedImages>
        <Styled.RelatedPosts>
          <h2>Related Content</h2>
        </Styled.RelatedPosts>
      </Styled.SectionTwo>
      <Styled.Footer>
        <h2>Footer</h2>
      </Styled.Footer>
    </Styled.Container>
  );
}
