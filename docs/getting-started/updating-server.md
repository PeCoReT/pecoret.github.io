---
sidebar_position: 3
---

# Updating PeCoReT Server

Minor updates:
```bash
cd /opt/PeCoReT
git pull
pip install -r requirements.txt
python3 manage.py migrate
python3 manage.py collectstatic
```