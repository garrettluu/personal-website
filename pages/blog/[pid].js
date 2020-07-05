import axios from 'axios';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';

export async function getStaticPaths() {
    require('dotenv').config();
  const response = await axios.get(process.env.BACKEND_URL + "/blog/urls");
  const paths = response.data.map((url) => "/blog/" + url);
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
    require('dotenv').config();
  const response = await axios.get(process.env.BACKEND_URL + "/blog/url", {
    params: {
      url: context.params.pid,
    }
  });
  const entry = response.data[0];
  return {
    props: {entry}
  }
}

export default (props) => {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <Layout>
      <Parallax scrollFactor={0.5} scrollOffset={0}>
        <div className="header">
          <p className="header-text">
            {props.entry ? props.entry.title : ""}
          </p>
            <div className="fancy-rectangle"></div>
          <p className="subheader-text">
            {props.entry ? props.entry.description : ""}
          </p>
        </div>
      </Parallax>

      <div className="blog-content date-text">
        {props.entry ? props.entry.date : ""}
      </div>

      <div className="blog-content">
      <p className="body-text">
        <ReactMarkdown source={props.entry ? props.entry.content : ""}
                       escapeHtml={false}/>
      </p>
      </div>

      <style jsx>{`
                .header {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 100%;
                    height: 512px;

                    background: url("/images/titlebg.jpg") no-repeat;
                    background-size: cover;
                }

                .header-text {
                    text-align: center;

                    font-family: 'Oswald';
                    font-size: 72px;
                    color: white;

                    margin-bottom: 0;
                }

                .subheader-text {
                    text-align: center;

                    font-family: 'Oswald';
                    font-size: 36px;
                    color: white;
                    margin-top: 0;
                }

                .date-text {
                   color: tomato;
                   margin-top: 30px;
                   margin-bottom: 30px;

                   font-size: 24px;
                   font-family: 'Oswald';
                }

                .blog-content {
                  margin-left: 20%;
                  margin-right: 20%;
                }

                a {
                  text-decoration: none;
                }

            `}
      </style>
    </Layout>
  );
}