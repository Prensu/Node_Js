<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog Bhanja | <%=title %></title>
</head>
<body>
<% const name="mario mario yo yo " %>

  <nav>
    <div class="site-title">
      <p><%=name %></p>
      <a href="/"><h1>Blog Bhanja</h1></a>
      <p>A mama bhanja Site</p>
    </div>
    <ul>
      <li><a href="/">Blogs</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/blogs/create">New Blog</a></li>
    </ul>
  </nav>

  <div class="blogs content">
    <h2>All Blogs</h2>
  </div>

</body>
</html>