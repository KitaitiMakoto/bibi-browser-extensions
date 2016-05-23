require 'rake/clean'
require 'json'

manifest = JSON.parse(File.read('manifest.json'))

BUILD_DIR = 'build'
CLEAN.include FileList["#{BUILD_DIR}/*.xpi"]

WEBEXTENSION = "bibi-#{manifest['version']}.xpi"

directory BUILD_DIR

desc WEBEXTENSION
file WEBEXTENSION => BUILD_DIR do
  sh "zip -r #{BUILD_DIR}/#{WEBEXTENSION} manifest.json background.js bibi/bib"
end

desc "Build WebExtension(same as #{WEBEXTENSION})"
task :webextension => WEBEXTENSION
