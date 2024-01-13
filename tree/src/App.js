import logo from './logo.svg';
import './App.css';
import Tree from "./components/tree";

const data = [
  {
    "title": "SEO (Поисковые системы)",
    "slug": "seo",
    "sessions": 1050,
    "users": 714,
    "phones": 35,
    "leads": 35,
    "conversion": 3,
    "childs": [
      {
        "title": "Google",
        "slug": "google",
        "sessions": 313,
        "users": 213,
        "phones": 12,
        "leads": 12,
        "conversion": 4
      },
      {
        "title": "Яндекс",
        "slug": "yandex",
        "sessions": 737,
        "users": 502,
        "phones": 23,
        "leads": 23,
        "conversion": 3
      }
    ]
  },
  {
    "title": "Внутренние переходы",
    "slug": "inner_links",
    "sessions": 24,
    "users": 12,
    "phones": 1,
    "leads": 1,
    "conversion": 4
  },
  {
    "title": "Переходы по ссылкам",
    "slug": "links",
    "sessions": 71,
    "users": 56,
    "phones": 1,
    "leads": 1,
    "conversion": 1,
    "childs": [
      {
        "title": "192.168.0.1",
        "slug": "192.168.0.1",
        "sessions": 2,
        "users": 2,
        "phones": 0,
        "leads": 0,
        "conversion": 0
      },
      {
        "title": "baidu.com",
        "slug": "baidu.com",
        "sessions": 3,
        "users": 3,
        "phones": 0,
        "leads": 0,
        "conversion": 0
      },
      {
        "title": "direct.yandex.ru",
        "slug": "direct.yandex.ru",
        "sessions": 3,
        "users": 1,
        "phones": 0,
        "leads": 0,
        "conversion": 0
      },
      {
        "title": "google.ro",
        "slug": "google.ro",
        "sessions": 2,
        "users": 1,
        "phones": 0,
        "leads": 0,
        "conversion": 0
      },
      {
        "title": "m.vk.com",
        "slug": "m.vk.com",
        "sessions": 5,
        "users": 5,
        "phones": 0,
        "leads": 0,
        "conversion": 0
      },
      {
        "title": "massage-xxx.ru",
        "slug": "massage-xxx.ru",
        "sessions": 26,
        "users": 22,
        "phones": 1,
        "leads": 1,
        "conversion": 4
      },
      {
        "title": "metrika.yandex.ru",
        "slug": "metrika.yandex.ru",
        "sessions": 1,
        "users": 1,
        "phones": 0,
        "leads": 0,
        "conversion": 0
      },
      {
        "title": "ya.ru",
        "slug": "ya.ru",
        "sessions": 29,
        "users": 21,
        "phones": 0,
        "leads": 0,
        "conversion": 0
      }
    ]
  },
];
function App() {
  return (
      <Tree data={data}/>
  );
}

export default App;
