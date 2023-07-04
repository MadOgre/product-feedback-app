import { HelloHell } from "components/HelloHell";
import { MobileLayout } from "components/MobileLayout";
import { Shelf, Spacer } from "components/common/layout";
import { FrontendMentorMobileText, NoFeedbackMobileText } from "components/common/typography";
import { debounce } from "utils/debounce";

function App(): JSX.Element {



  return (
    <div>
      <MobileLayout>
        <HelloHell />
        <FrontendMentorMobileText color="white">
          This is frontend mentor text
        </FrontendMentorMobileText>
        <NoFeedbackMobileText>This is no feedback text</NoFeedbackMobileText>
        <Shelf>
          <div style={{background: "red", width: "20px", height: "20px"}} />
          <div style={{background: "green", width: "20px", height: "20px"}} />
          <Spacer />
          <div style={{background: "blue", width: "20px", height: "20px"}} />
          <button
            onClick={func1}
            type="button"
          >
            click me
          </button>
        </Shelf>
        <HelloHell />
        <HelloHell />
        <HelloHell />
        <HelloHell />
        <HelloHell />
        <HelloHell />
      </MobileLayout>
    </div>
  );
}

export default App;
