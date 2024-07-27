with open("raw.txt", 'r') as f:
    s = f.read()
s = s.replace("**", '')
s = s.replace("- ", '')
s = s.replace("`", '')
s = s.replace("\n", "<br>")
s = s.replace("\t", "    ")
s = s.replace('"', '\\"')
with open("raw.txt", 'w') as f:
    f.write(s)
print("Executed successfully.")
