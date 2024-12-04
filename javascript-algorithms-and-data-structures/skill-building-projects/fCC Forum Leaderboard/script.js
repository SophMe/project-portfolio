const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer = document.getElementById('posts-container');

const timeAgo = (time) => {
  const currentTime = new Date();
  const lastPost = new Date(time);
  if (Math.floor((currentTime - lastPost) / 60000) < 60) {
    return `${Math.floor((currentTime - lastPost) / 60000)}m ago`;
  } else if (Math.floor((currentTime - lastPost) / 3600000) < 24) {
    return `${Math.floor((currentTime - lastPost) / 3600000)}h ago`;
  } else if (Math.floor((currentTime - lastPost) / 86400000) < 7) {
    return `${Math.floor((currentTime - lastPost) / 86400000)}d ago`;
  } else {
    return `${Math.floor((currentTime - lastPost) / (86400000 * 7))}w ago`;
  }
};

const viewCount = (views) => {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  } else {
    return views;
  }
};

const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();

const showLatestPosts = (data) => {
  const { topic_list, users } = data;
  const { topics } = topic_list;
  postsContainer.innerHTML = topics.map((item) => {
    // console.log(item);
    const {id, title, views, posts_count, slug, posters, category_id, bumped_at} = item;
    return `
      <tr>
        <td>
          <p class="post-title">${title}</p>
        </td>
        <td></td>
        <td>${posts_count - 1}</td>
        <td>${viewCount(views)}</td>
        <td>${timeAgo(bumped_at)}</td>
      </tr>
    `;
  }).join('');
};
