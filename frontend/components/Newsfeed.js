import styled from "styled-components";
import { withIntl } from "../lib/i18n";
import { Flex, Box } from "reflexbox/styled-components";

const Disclaimer = styled.p`
  color: #555;
  font-size: 11pt;
`;

const SmallButton = styled.a`
  display: block;
  min-width: 50px;
  border-radius: 5px;
  border: none;
  padding: 0px;
  text-align: center;
  margin: 0px;
  color: #555;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    background: #eee;
  }
  &:active {
    background: #ddd;
    box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.5);
    color: black;
  }
`;

const Emoji = styled.span`
  font-size: 32px;
`;

const Article = styled.div``;
const Title = styled.h3`
  margin: 0;
  line-height: 1.2;
  & a {
    text-decoration: none;
  }
`;
const Description = styled.p`
  margin-top: 5px;
`;
const Metadata = styled.span`
  color: #555;
  & a {
    text-decoration: none;
    color: #555;
  }
`;

const news = {
  fransbinje: [
    {
      title: "Playstreet Rue Frans Binjé",
      date: "2020-07-11",
      description:
        "Playstreet with a saxophonist 🎷 and kids playing around ⛹️‍♀️ ⚽️ 🚲 and a lot of love ❤️",
      url: "https://www.youtube.com/watch?v=4_TJ-d3Ej5Q",
    },
  ],
  godefroiddevreese: [
    {
      title: "Playstreet survey",
      date: "2020-09-03",
      description:
        "Please help us make the playstreet better by filling out this form. Merci de nous aider à améliorer notre rue au jeu en nous donnant votre feedback",
      url: "https://forms.gle/Ffry464SfFt85iEF9",
    },
    {
      title: "Playstreet August 22-23 2020",
      date: "2020-08-25",
      description:
        "Playstreet with a concert 🎸🎤 and kids playing around ⛹️‍♀️ ⚽️ 🚲 and a lot of love ❤️",
      url: "https://www.youtube.com/watch?v=Skx4x3g-Xxk",
    },
    {
      title: "Playstreet July 18-19 2020",
      date: "2020-07-20",
      description:
        "Playstreet with a saxophonist 🎷 and kids playing around ⛹️‍♀️ ⚽️ 🚲 and a lot of love ❤️",
      url: "https://www.youtube.com/watch?v=4_TJ-d3Ej5Q",
    },
    {
      title:
        "Open letter to the commune of Schaerbeek to give priority to pedestrians",
      url:
        "https://openletter.earth/open-letter-to-the-city-of-schaerbeek-give-priority-to-pedestrians-runners-and-bicycles-54952bee",
      description:
        "Please sign with us this letter to make sure that pedestrians, runners and cyclists can use the road like they will be able to do in 1000 Brussels.",
      date: "2020-05-02",
    },
    {
      title: "'Staying Alive': deze buren dansen elke avond in hun straat",
      url:
        "https://www.bruzz.be/videoreeks/donderdag-23-april-2020/video-staying-alive-deze-buren-dansen-elke-avond-hun-straat",
      description:
        "Xavier en Leen wonen nog maar net in Schaarbeek maar zijn nu al de grootste sfeermakers van hun straat. Elke avond om 20 uur brengen ze de buren samen op de tonen van 'Staying Alive'. Ze klappen en dansen voor de mensen die in de zorgsector werken en leren zo hun buren kennen.",
      date: "2020-04-23",
    },
  ],
};

export function prettyUrl(url) {
  if (!url) {
    return "";
  }
  const u = new URL(url);
  return u.hostname.replace(/www\./i, "");
}

export default withIntl(({ data, t, street }) => {
  return (
    <div>
      <h2>
        <Flex justifyContent="space-between">
          <Box>
            <Emoji>📰</Emoji> {t("sections.newsfeed.title")}
          </Box>
          <Box>
            <Emoji>
              <SmallButton href="https://docs.google.com/forms/d/e/1FAIpQLSd2j5_kWxVccXwNNXLQdOe1jpImlZdkbYouzy3q0Q3B5WPaMw/viewform?usp=sf_link">
                ⊕
              </SmallButton>
            </Emoji>
          </Box>
        </Flex>
      </h2>
      {news[street].map((n) => (
        <Article>
          <Title>
            <a href={n.url}>{n.title}</a>
          </Title>
          <Metadata>
            {n.date} <a href={n.url}>{prettyUrl(n.url)}</a>
          </Metadata>
          <Description>
            {n.description}{" "}
            <a href={n.url}>{t("newsfeed.article.viewStory")}</a>
          </Description>
        </Article>
      ))}
    </div>
  );
});
