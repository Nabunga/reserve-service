import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";
import css from './PageLayout.module.scss';

interface PageLayoutProps {
  children: JSX.Element
}

const PageLayout = ({children}: PageLayoutProps) => {
  return (
    <div className={css.wrapper}>
      <HeaderLayout />
      <main className={css.main}>
        {children}
      </main>
      <FooterLayout />
    </div>
  )
}

export default PageLayout;