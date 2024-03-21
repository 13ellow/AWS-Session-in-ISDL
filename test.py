import sys
import logging
import rds_config
import pymysql

#rds settings
rds_host  = "test-test.c7ek8ss0y4bh.ap-southeast-1.rds.amazonaws.com"
name = rds_config.db_username
password = rds_config.db_password
db_name = rds_config.db_name


logger = logging.getLogger()
logger.setLevel(logging.INFO)

# try:
#     conn = pymysql.connect(rds_host, user=name, passwd=password, db=db_name, connect_timeout=5)
# except:
#     logger.error("ERROR: Unexpected error: Could not connect to MySql instance.")
#     sys.exit()

# logger.info("SUCCESS: Connection to RDS mysql instance succeeded")
def handler(event, context):
    """
    This function fetches content from mysql RDS instance
    """
    
    try:
        conn = pymysql.connect(rds_host, user=name, passwd=password, db=db_name, connect_timeout=5)
        return "success!!"
    except:
        return "failure..."
        logger.error("ERROR: Unexpected error: Could not connect to MySql instance.")


    # item_count = 0

    # with conn.cursor() as cur:
    #     cur.execute("create database if not exists isdl_aws_db;")
    #     cur.execute("USE isdl_aws_db;")
    #     cur.execute("CREATE TABLE IF NOT EXISTS users ( id INT AUTO_INCREMENT PRIMARY KEY, user_name VARCHAR(255) NOT NULL, message VARCHAR(255) NOT NULL);")
    #     cur.execute('insert into users (user_name, message) values("ktsuji", "hello world");')
    #     cur.execute('insert into users (user_name, message) values("yhisa", "hello world2");')
    #     cur.execute('insert into users (user_name, message) values("msudas", "hello world3");')
    #     conn.commit()
    #     cur.execute("select * from users;")
    #     for row in cur:
    #         item_count += 1
    #         logger.info(row)
    #         #print(row)


    # return "Added %d items from RDS MySQL table" %(item_count)