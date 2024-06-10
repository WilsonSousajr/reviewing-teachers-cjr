import UnloggedHeader from "@/components/Header/unloggedHeader";
import UserPage from "@/components/UserUnlogged/UserPage";
import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Review {
  id: number;
  userId: number;
  teacherId: number;
  disciplineId: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
interface User{
  id: number;
  email: string;
  password: string;
  name: string;
  picture: string;
  departament: string;
  course: string;
  createdAt: string;
  updatedAt: string;
}

const Perfil_Deslogado: NextPage = () => {
  const router = useRouter();
    
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingUser, setLoadinguser] = useState(true);
  let reviewRoute: string= "";
  let userRoute: string= "";
  
  
  useEffect(() => {
      if(!router.isReady) return
      const id = router.query;
      reviewRoute = 'http://localhost:3333/reviews/user/'+id?.id
      userRoute = 'http://localhost:3333/users/'+id?.id
      async function getReviews() {
          try {
              const response = await axios.get(reviewRoute);
              setReviews(response.data);
              console.log("Fetched reviews: ", response.data);
          } catch (error) {
              console.error("Error fetching reviews:", error);
          } finally {
              setLoading(false);
          }
      }

      async function getUser() {
          try {
              const response = await axios.get(userRoute)
              setUsers(response.data)
          }catch (error){
              console.error("Error fetching teacher: ", error)
          }finally {
              setLoadinguser(false);
          }
      }
      
      getReviews();
      getUser();
  }, [router.isReady]);
  return (
    <>
      <UnloggedHeader />
      <div>
        <UserPage />
      </div>
    </>
    
  )
}

export default Perfil_Deslogado;