"use client"

import { usePosts } from "./utils/queris";
import { useAddPost } from "./utils/mutation";
import { data } from "autoprefixer";

const Page = () => {
  const posts = usePosts();
  
  const addPost = useAddPost();

  const hundleAddbutton = () => {
    const data = ({
      title: 'Teste',
      body: 'Corpo do teste',
      userId: 7
    });

    addPost.mutate(data)
  }
 
  return (
    <div className="container mx-auto">
      <h1 className="text-white text-3xl">Tudo bem?</h1>

      <div className="border border-black p-3 my-3">
        <p>Área novo post</p>

        <p>{addPost.isIdle && 'Esperando por algo'}</p>
        <p>{addPost.isPending && 'carregando...'}</p>        
        <p>{addPost.isSuccess && 'concluido'}</p>
       
        <button disabled={addPost.isSuccess} onClick={hundleAddbutton}>Inserir novo post</button>
      </div>
    
      {posts.isLoading && "Carregando..."}

      {posts.data &&
        <ul>
          {posts.data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      }  
    </div>  
                 
  );
}
export default Page;