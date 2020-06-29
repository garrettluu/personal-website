import axios from 'axios';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  return {
    paths: [
      '/blog/test'
    ],
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const response = await axios.get("http://localhost:3001/blog/url", {
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
            {props.entry.title}
          </p>
            <div className="fancy-rectangle"></div>
          <p className="subheader-text">
            {props.entry.description}
          </p>
        </div>
      </Parallax>

      <div>
      <p className="body-text">
        {props.entry.content}
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
            `}
      </style>
    </Layout>
  );
}