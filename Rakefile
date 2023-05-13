require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"


# Change your GitHub reponame
GITHUB_REPONAME = "a-ad/book-review"


namespace :site do
  desc "Generate blog files"
  task :generate do
    Jekyll::Site.new(Jekyll.configuration({
                                            "source"      => ".",
                                            "destination" => "_site"
                                          })).process
  end


  desc "Generate and publish blog to gh-pages"
  task :publish => [:generate] do
    # tmp = Dir.mktmpdir
    # p tmp
    # begin
    Dir.mktmpdir do |tmp|
      cp_r "_site/.", tmp
      p "copied"
      pwd = Dir.pwd
      Dir.chdir tmp
      p system "pwd"


      system "git init"
      system "git config user.email '49006277+a-ad@users.noreply.github.com'"
      p system "git config user.email"
      system "git add ."
      message = "Site updated at #{Time.now.utc}"
      system "git commit -m #{message.inspect}"
      system "git remote add origin git@github.com:#{GITHUB_REPONAME}.git"
      system "git push origin master:refs/heads/gh-pages --force"

      Dir.chdir pwd
    end
  end
end