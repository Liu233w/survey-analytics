import { QuestionCommentModel } from "survey-core";
import { WordCloud } from "../src/wordcloud/wordcloud";

test("remove stopwords", () => {
  var wc = new WordCloud(undefined, new QuestionCommentModel("q1"), [
    { q1: "The Thimes" },
    { q1: "Super mega answer mega" }
  ]);
  var data = wc.getData();
  expect(Object.keys(data).length).toEqual(4);
  expect(data.filter(d => d[0] === "The").length).toEqual(0);
  expect(data.filter(d => d[0] === "mega").length).toEqual(1);
  expect(data.filter(d => d[0] === "mega")[0][0]).toEqual("mega");
  expect(data.filter(d => d[0] === "mega")[0][1]).toEqual(2);
});
