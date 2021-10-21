import Layout from "../components/Layout";
import {BusinessData} from "../components/dataPages";
import CompanyPage from "../components/companyPage";
import Footer from "../components/Footer/footer";
const shreesiddhivinayakfood= () => {
  return (
    <>
      <Layout title="shreesiddhivinayakfood" >
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
