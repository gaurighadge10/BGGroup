import Layout from "../components/Layout";
import {BusinessData} from "../components/dataPages";
import CompanyPage from "../components/companyPage";
import Footer from "../components/Footer/footer";

const Ashishtradingcompany = () => {
  return (
    <>
      <Layout title="Ashishtradingcompany">
      {BusinessData.map(data1=>{
        if(data1.id==1){return(
        <CompanyPage company="1" />
      )};})} 
      </Layout>
     <Footer />
    </>
   );
};

export default Ashishtradingcompany;