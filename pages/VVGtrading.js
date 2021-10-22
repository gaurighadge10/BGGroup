import Layout from "../components/Layout";
import {BusinessData} from "../components/dataPages";
import CompanyPage from "../components/companyPage";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/Navbar";
const VVGtrading = () => {
  return (
    <>
      <Layout title="VVGtrading" >
        <Navbar />
      {BusinessData.map(data1=>{
        if(data1.id==2){return(
        <CompanyPage company="2" />
      )};})}
      </Layout>
      <Footer />
    </>
  );
};

export default VVGtrading;