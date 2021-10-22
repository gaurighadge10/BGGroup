import Layout from "../components/Layout";
import {BusinessData} from "../components/dataPages";
import CompanyPage from "../components/companyPage";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/Navbar";
const shreesiddhivinayakfood= () => {
  return (
    <>
      <Layout title="shreesiddhivinayakfood" >
      <Navbar />
      {BusinessData.map(data1=>{
        if(data1.id==3){return(
        <CompanyPage company="3" />
      )};})}
    </Layout>
    <Footer />
    </>
  );
};

export default shreesiddhivinayakfood;
