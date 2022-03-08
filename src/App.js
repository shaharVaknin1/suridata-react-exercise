import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { AllPosts } from "./components/postsContainer";
import {
  translateAllPosts,
  selectCurrentLanguage,
  getAllPosts,
  selectPosts,
} from "../src/store/posts";
import { Button } from "./styles";
import * as config from "./config.json";

const { sportedLanguages } = config;

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const currentLanguage = useSelector(selectCurrentLanguage);

  return (
    <>
      <Button
        onClick={() => {
          dispatch(getAllPosts());
        }}
      >
        Load All Posts
      </Button>
      <Select
        value={currentLanguage}
        options={sportedLanguages}
        onChange={(selectedOption) =>
          dispatch(
            translateAllPosts({
              posts,
              currentLanguage,
              languageTranslateTo: selectedOption,
            })
          )
        }
      />
      <AllPosts />
    </>
  );
}

export default App;
