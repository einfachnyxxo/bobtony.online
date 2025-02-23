function markdownToHtml(markdown) {
    markdown = markdown.replace(/### (.*)/g, '<h3>$1</h3>');
    markdown = markdown.replace(/## (.*)/g, '<h2>$1</h2>');
    markdown = markdown.replace(/# (.*)/g, '<h1>$1</h1>');
    markdown = markdown.replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>');
    markdown = markdown.replace(/\*(.*)\*/g, '<em>$1</em>');
    markdown = markdown.replace(/\[(.*)\]\((.*)\)/g, '<a href="$2">$1</a>');
    markdown = markdown.replace(/!\[(.*)\]\((.*)\)/g, '<img src="$2" alt="$1">');
    markdown = markdown.replace(/  \n/g, '<br>');
    markdown = markdown.replace(/\n\n/g, '</p><p>');
    markdown = markdown.replace(/\* (.*)/g, '<li>$1</li>');
    markdown = markdown.replace(/<li>.*<\/li>/g, '<ul>$&</ul>');
    markdown = markdown.replace(/`(.*)`/g, '<code>$1</code>');
    markdown = markdown.replace(/^> (.*)/gm, '<blockquote>$1</blockquote>');
    markdown = markdown.replace(/---/g, '<hr>');

    return '<p>' + markdown + '</p>';
}