require 'yaml'
require 'fileutils'

# Ensure directories exist
FileUtils.mkdir_p('files/projects')
FileUtils.mkdir_p('files/publications')

# Source dummy file (assuming one exists, or create one)
dummy_source = 'files/paper1.pdf'
if !File.exists?(dummy_source)
  # Create a simple text file renamed as pdf if real pdf missing
  File.write('files/dummy.pdf', 'This is a placeholder PDF.')
  dummy_source = 'files/dummy.pdf'
end

# Scan Projects
Dir.glob('_projects/*.md').each do |file|
  content = File.read(file)
  if content =~ /download_link: "(.*?)"/
    path = $1
    # Remove leading slash
    local_path = path.sub(/^\//, '')
    
    # Copy dummy file there
    if !File.exists?(local_path)
      FileUtils.cp(dummy_source, local_path)
      puts "Created dummy file: #{local_path}"
    end
  end
end

# Scan Publications
Dir.glob('_publications/*.md').each do |file|
  content = File.read(file)
  if content =~ /download_link: "(.*?)"/
    path = $1
    local_path = path.sub(/^\//, '')
    
    if !File.exists?(local_path)
      FileUtils.cp(dummy_source, local_path)
      puts "Created dummy file: #{local_path}"
    end
  end
end
