import { Suspense } from 'react'
import PostFeed from '../../components/PostFeed'
 import Weather from '../../components/Weather'
import CreatePostComponent from '../../components/CreatePostComponent'

export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <div>
        <CreatePostComponent/>
      </div>

      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  )
}