const questions = [
    {
        "question": "Every employee of your company has a Google account. Your operational team needs to manage a large number of instances on Compute Engine. Each member of this team needs only administrative access to the servers. Your security team wants to ensure that the deployment of credentials is operationally efficient and must be able to determine who accessed a given instance. What should you do?",
        "choices": ["A.Ask each team member to use a project key ", "B. Ask each member of the team to generate a new SSH key pair and to send you their public key. Use a configuration management tool to deploy those keys on each instance.", "C. Ask each member of the team to generate a new SSH key pair and to add the public key to their Google account. Grant the ג€compute.osAdminLoginג€ role to the Google group corresponding to this team. ", "D.  Generate a new SSH key pair. Give the private key to each member of your team. Configure the public key as a project-wide public SSH key in your Cloud Platform project and allow project-wide public SSH keys on each instance."],
         "answer": "C. Ask each member of the team to generate a new SSH key pair and to add the public key to their Google account. Grant the ג€compute.osAdminLoginג€ role to the Google group corresponding to this team. Most Voted",
        "explanation": "C.We recommend collecting users with the same responsibilities into groups and assigning IAM roles to the groups rather than to individual users. For example, you can create a data scientist group and assign appropriate roles to enable interaction with BigQuery and Cloud Storage. When a new data scientist joins your team, you can simply add them to the group and they will inherit the defined permissions. You can create and manage groups through the Admin Console."
    },
    {
        "question": "You need to create a custom VPC with a single subnet. The subnet's range must be as large as possible. Which range should you use?",
        "choices": ["A. 0.0.0.0/0", "B. 10.0.0.0/8", "C. 172.16.0.0/12", "D. 192.168.0.0/16"],
         "answer": "B. 10.0.0.0/8",
        "explanation": "B.Class A: 10.0.0.0/8 provides the largest subnet range with 16,777,214 possible IP addresses. This is because it uses only the first 8 bits for the network address, leaving the remaining 24 bits for host addresses.Class B: 172.16.0.0/12 provides a smaller range with 1,048,574 possible IP addresses.Class C: 192.168.0.0/16 provides an even smaller range with 65,534 possible IP addresses.0.0.0.0/0: This is not a valid subnet range for a VPC. It represents the entire internet.Therefore, using the 10.0.0.0/8 range for your single subnet VPC will provide you with the maximum number of available IP addresses."
    },
    {
        "question": "You want to select and configure a cost-effective solution for relational data on Google Cloud Platform. You are working with a small set of operational data in one geographic location. You need to support point-in-time recovery. What should you do?",
        "choices": ["A. Select Cloud SQL (MySQL). Verify that the enable binary logging option is selected", "B. Select Cloud SQL (MySQL). Select the create failover replicas option.", "C. Select Cloud Spanner. Set up your instance with 2 nodes.", "D. Select Cloud Spanner. Set up your instance as multi-regional."],
         "answer": "A. Select Cloud SQL (MySQL). Verify that the enable binary logging option is selected.",
        "explanation": "A is Correct. You must enable binary logging to use point-in-time recovery. Enabling binary logging causes a slight reduction in write performance. https://cloud.google.com/sql/docs/mysql/backup-recovery/backups"
    },
    {
        "question": "You want to configure autohealing for network load balancing for a group of Compute Engine instances that run in multiple zones, using the fewest possible steps.You need to configure re-creation of VMs if they are unresponsive after 3 attempts of 10 seconds each. What should you do",
        "choices": ["A. Create an HTTP load balancer with a backend configuration that references an existing instance group. Set the health check to healthy (HTTP)", "B. Create an HTTP load balancer with a backend configuration that references an existing instance group. Define a balancing mode and set the maximum RPS to 10.", "C. Create a managed instance group. Set the Autohealing health check to healthy (HTTP)", "D. Create a managed instance group. Verify that the autoscaling setting is on."],
         "answer": "C. Create a managed instance group. Set the Autohealing health check to healthy (HTTP)",
        "explanation": "C. go to gcp console create a httpa load balancer and in the health check settings take your mouse to question mark it says Ensures that requests are sent only to instances that are up and running so its not recreating, if the vm not working it redirect to one which work."
    },
    {
        "question": "Your company uses Cloud Storage to store application backup files for disaster recovery purposes. You want to follow Google's recommended practices. Which storage option should you use?",
        "choices": ["A. Multi-Regional Storage", "B. Regional Storage", "C. Archive Storage", "D. Coldline Storage"],
         "answer": "C. Archive Storage",
        "explanation": " C. Archive Storage is designed for data that is rarely accessed and can be stored for a long time. It is optimized for long-term data archiving and retrieval. "
    },
    {
        "question": "Your company stores frequently accessed customer analytics data for a global application. You want to ensure low latency and high availability across multiple regions while following Google's recommended practices. Which storage option should you use?",
        "choices": ["A. Multi-Regional Storage", "B. Regional Storage", "C. Nearline Storage", "D. Coldline Storage"],
         "answer": "A. Multi-Regional Storage",
        "explanation": "A.  Multi-Regional Storage is ideal for frequently accessed data with a global audience. "
    },
    {
        "question": "Your company needs to store log files generated by an application in a single region. These logs are accessed occasionally for troubleshooting but need to be retained for compliance purposes. You want to follow Google's recommended practices. Which storage option should you use?",
        "choices": ["A. Multi-Regional Storage", "B. Regional Storage", "C. Nearline Storage", "D. Coldline Storage"],
         "answer": "C. Nearline Storage",
        "explanation": "C. Nearline Storage is designed for data accessed less than once a month but more frequently than once a year."
    },
    {
        "question": "Several employees at your company have been creating projects with Cloud Platform and paying for it with their personal credit cards, which the company reimburses. The company wants to centralize all these projects under a single, new billing account. What should you do?",
        "choices": ["A. Contact cloud-billing@google.com with your bank account details and request a corporate billing account for your company.", "B. Create a ticket with Google Support and wait for their call to share your credit card details over the phone.", "C. In the Google Platform Console, go to the Resource Manage and move all projects to the root Organizarion.", "D. In the Google Cloud Platform Console, create a new billing account and set up a payment method."],
         "answer": "D. In the Google Cloud Platform Console, create a new billing account and set up a payment method.",
        "explanation": " D. To centralize billing for all projects:Create a new billing account in the Google Cloud Platform Console.Set up a corporate payment method (e.g., credit card or bank account) under this billing account.Link all existing projects to the new billing account.This approach ensures all project costs are billed centrally, making it easier to manage and track expenses."
    },
    {
        "question": "You have an application that looks for its licensing server on the IP 10.0.3.21. You need to deploy the licensing server on Compute Engine. You do not want to change the configuration of the application and want the application to be able to reach the licensing server. What should you do?",
        "choices": ["A. Reserve the IP 10.0.3.21 as a static internal IP address using gcloud and assign it to the licensing server.", "B. Reserve the IP 10.0.3.21 as a static public IP address using gcloud and assign it to the licensing server.", "C. Use the IP 10.0.3.21 as a custom ephemeral IP address and assign it to the licensing server.", "D. Start the licensing server with an automatic ephemeral IP address, and then promote it to a static internal IP address."],
         "answer": "A. Reserve the IP 10.0.3.21 as a static internal IP address using gcloud and assign it to the licensing server. ",
        "explanation": "A IP 10.0.3.21 is internal by default, and to ensure that it will be static non-changing it should be selected as static internal ip address."
    },
    {
        "question": "Your company has a project in Google Cloud, and several developers need to deploy applications using Compute Engine. To follow the principle of least privilege, which role should you assign to the developers?",
        "choices": ["A. Owner", "B. Editor", "C. Compute Admin", "D. Compute Viewer"],
         "answer": "C. Compute Admin",
        "explanation": "C. Compute Admin The Compute Admin role allows developers to manage Compute Engine resources without giving them full project-level permissions like Owner or Editor."
    },
    {
        "question": "Your company stores user-uploaded images in a Cloud Storage bucket. To reduce storage costs, you want to move objects older than 90 days to Nearline storage. What should you do?",
        "choices": ["A. Create a lifecycle rule on the bucket to transition objects to Nearline storage after 90 days.", "B. Manually move objects to Nearline storage every 90 days.", "C. Use a cron job on a Compute Engine instance to move objects to Nearline storage.", "D. Create a new bucket with Nearline storage and move objects manually."],
         "answer": " A. Create a lifecycle rule on the bucket to transition objects to Nearline storage after 90 days.",
        "explanation": "A. Lifecycle rules automatically manage the transition of objects to different storage classes based on age or conditions, reducing manual effort."
    },
    {
        "question": "You are deploying a new application on Google Cloud and need to ensure it is accessible from a specific IP range. Which Google Cloud resource would you configure to meet this requirement?",
        "choices": ["A. Cloud NAT", "B. Firewall rules", "C. VPN Gateway", "D. Load Balancer"],
         "answer": "B. Firewall rules",
        "explanation": "B.  Firewall rules control incoming and outgoing traffic for your instances based on specified IP ranges, protocols, and ports."
    },
    {
        "question": "You want to deploy a containerized application using Google Kubernetes Engine (GKE). What is the minimum step required to create a GKE cluster?",
        "choices": ["A. Configure a Virtual Private Cloud (VPC) first.", "B. Use gcloud container clusters create to create the cluster.", "C. Install Kubernetes manually on Compute Engine instances.", "D. Create an autoscaler for the nodes in the cluster."],
         "answer": "B. Use gcloud container clusters create to create the cluster.",
        "explanation": "B. Use gcloud container clusters create to create the cluster. GKE manages the underlying Kubernetes infrastructure, so you can create a cluster using a single command."
    },
    {
        "question": "You want to ensure that your Google Cloud project does not exceed its budget. What is the best way to achieve this?",
        "choices": ["A. Use the Google Cloud Console to set a hard limit on spending.", "B. Configure a billing alert to notify you when costs exceed a threshold.", "C. Use gcloud billing set-limit to stop billing automatically.", "D. Disable all services when the budget is reached."],
         "answer": "B. Configure a billing alert to notify you when costs exceed a threshold.",
        "explanation": "B. Configure a billing alert to notify you when costs exceed a threshold. Billing alerts notify you when costs approach or exceed a budget but do not stop usage. Google Cloud does not support hard spending limits."
    },
    {
        "question": "Your organization has two projects, each with its own Virtual Private Cloud (VPC) network. The projects need to communicate privately. What is the most efficient way to achieve this?",
        "choices": ["A. Use an External Load Balancer.", "B. Create a VPC peering connection between the two networks.", "C. Use Cloud VPN to connect the networks.", "D. Set up a NAT Gateway to enable private communication."],
         "answer": "B. Create a VPC peering connection between the two networks.",
        "explanation": "B. Create a VPC peering connection between the two networks.VPC peering allows private communication between two VPC networks without requiring additional gateways or VPNs."
    },
    {
        "question": "You want to enable high availability for a Cloud SQL instance. What should you do?",
        "choices": ["A. Enable read replicas for the instance.", "B. Enable the High Availability option when creating the instance.", "C. Configure a cron job to back up the instance regularly.", "D. Use Cloud Spanner instead of Cloud SQL."],
         "answer": "B. Enable the High Availability option when creating the instance.",
        "explanation": " B. Enable the High Availability option when creating the instance The high availability option ensures failover to a secondary instance in a different zone."
    },
    {
        "question": "Your company is migrating large amounts of data to Google Cloud Storage. Which service provides the most efficient way to transfer this data?",
        "choices": ["A. gsutil command-line tool", "B. Transfer Appliance", "C. Cloud VPN", "D. BigQuery Data Transfer Service"],
         "answer": "B. Transfer Appliance",
        "explanation": "Transfer Appliance is a physical device provided by Google to efficiently move large datasets to Cloud Storage."
    },
    {
        "question": "You want to distribute traffic across multiple regions for a global application. Which type of load balancer should you use?",
        "choices": ["A. Network Load Balancer", "B. HTTP(S) Load Balancer", "C. Internal Load Balancer", "D. TCP/UDP Load Balancer"],
         "answer": "B. HTTP(S) Load Balancer",
        "explanation": " The HTTP(S) Load Balancer is a global load balancer that can distribute traffic across multiple regions."
    },
    {
        "question": "You want to monitor the health of your Compute Engine instances and receive notifications if CPU usage exceeds 80%. What should you configure?",
        "choices": ["A. Uptime checks in Cloud Monitoring", "B. Logs-based metrics in Cloud Logging", "C. Metrics Explorer in Cloud Monitoring", "D. Alerts in Cloud Monitoring"],
         "answer": "D. Alerts in Cloud Monitoring",
        "explanation": "Alerts notify you based on specific conditions, like CPU usage, ensuring you can take action quickly."
    },
    {
        "question": "Your organization requires high-performance virtual machines with GPU support for machine learning workloads. What GCP service should you use to create virtual machine instances with GPUs?",
        "choices": ["a. Compute Engine", "b. Cloud TPU", "c. Cloud GPU", "d. Cloud AI Platform"],
         "answer": "a. Compute Engine",
        "explanation": "a. Compute Engine"
    },
    {
        "question": "Your team is responsible for deploying and managing microservices in containers. Which Google Cloud service provides a managed environment for container orchestration?",
        "choices": ["A. Google Kubernetes Engine (GKE)", "B. Cloud Run", "C. Cloud Functions", "D. Cloud Endpoints"],
         "answer": "A. Google Kubernetes Engine (GKE)",
        "explanation": "A. Google Kubernetes Engine (GKE)"
    },
    {
        "question": "Your organization is considering using Google App Engine for hosting web applications. What is the primary benefit of using Google App Engine?",
        "choices": ["A. Simplified Delpoyment and Scaling", "B. Built-in security features", "C. Support for multiple programming languages", "D. Integration with Google Cloud services"],
         "answer": "A. Simplified Delpoyment and Scaling",
        "explanation": "A. Simplified Delpoyment and Scaling"
    },
    {
        "question": "Your team is exploring serverless computing options on Google Cloud. Which service allows you to execute code in response to events without the need to manage servers?",
        "choices": ["a. Cloud Functions", "b. Cloud Run", "c. Cloud Storage", "d. Cloud SQL"],
         "answer": "a. Cloud Functions",
        "explanation": "a. Cloud Functions"
    },    {
        "question": "Your organization requires a scalable and managed platform for running serverless applications. What Google Cloud service provides a fully managed, serverless platform for deploying applications?",
        "choices": ["a. Cloud Functions", "b. Cloud Run", "c. Cloud App Engine", "d. Cloud SQL"],
         "answer": "c. Cloud App Engine",
        "explanation": "c. Cloud App Engine"
    },    
    {
        "question": "Your organization needs a scalable object storage solution for storing and serving large amounts of unstructured data, such as images and videos. What Google Cloud service is designed for this purpose?",
        "choices": ["A. Google Cloud Storage", "B. Google Cloud Bigtable", "C. Google Cloud Datastore", "D. Google Cloud Spanner"],
         "answer": "A. Google Cloud Storage",
        "explanation": "Google Cloud Storage is designed for scalable object storage and is suitable for storing and serving large amounts of unstructured data like images and videos."
    },
    {
        "question": "To optimize read-heavy workloads for a global audience, which GCP database service would you choose?",
        "choices": ["A. Google Cloud Bigtable", "B. Google Cloud SQL", "C. Google Cloud Spanner", "D. Google Cloud Datastore"],
         "answer": "C. Google Cloud Spanner",
        "explanation": "Google Cloud Spanner is a globally distributed, horizontally scalable database that can handle read-heavy workloads with strong consistency."
    },
    {
        "question": "What is the main benefit of using Google Cloud Firestore for mobile and web application development?",
        "choices": ["A. Strong consistency and high availability", "B. Real-time updates and offline support", "C. Easy integration with Firebase", "D. Automatic scaling and performance optimization"],
         "answer": "B. Real-time updates and offline support",
        "explanation": "Google Cloud Firestore provides real-time synchronization and offline support for mobile and web applications."
    },
    {
        "question": "When should you consider using Google Cloud Memorystore as a managed in-memory data store?",
        "choices": ["A. For long-term data storage", "B. For caching frequently accessed data", "C. For high-performance computing", "D. For data warehousing"],
         "answer": "B. For caching frequently accessed data",
        "explanation": "Google Cloud Memorystore is a fully managed in-memory data store designed for high-performance caching."
    },
    {
        "question": "What GCP database service allows you to perform online schema migrations without downtime?",
        "choices": ["A. Google Cloud SQL", "B. Google Cloud Spanner", "C. Google Cloud Datastore", "D. Google Cloud Bigtable"],
         "answer": "B. Google Cloud Spanner",
        "explanation": "Google Cloud Spanner supports online schema migrations, allowing changes to be made without impacting availability."
    },
    {
        "question": "You need a dynamic way of provisioning VMs on Compute Engine. The exact specifications will be in a dedicated configuration file. You want to follow Google's recommended practices. Which method should you use?",
        "choices": ["A. Deployment Manager", "B. Cloud Composer", "C. Managed Instance Group", "D. Unmanaged Instance Group"],
         "answer": "A. Deployment Manager",
        "explanation": "The correct answer is Option A - Deployment Manager. Deployment Manager is a configuration management tool that allows you to define and deploy a set of resources, including Compute Engine VMs, in a declarative manner. You can use it to specify the exact specifications of your VMs in a configuration file, and Deployment Manager will create and manage those VMs for you. Deployment Manager is recommended by Google as a way to automate and manage the deployment of resources on the Google Cloud Platform."
    },
    {
        "question": "You have a Dockerfile that you need to deploy on Kubernetes Engine. What should you do?",
        "choices": ["A. Use kubectl app deploy <dockerfilename>.", "B. Use gcloud app deploy <dockerfilename>.", "C. Create a docker image from the Dockerfile and upload it to Container Registry. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file. ", "D. Create a docker image from the Dockerfile and upload it to Cloud Storage. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file."],
         "answer": "C. Create a docker image from the Dockerfile and upload it to Container Registry. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file.",
        "explanation": "The correct answer is Option C. To deploy a Docker container on Kubernetes Engine, you should first create a Docker image from the Dockerfile and push it to Container Registry, which is a fully-managed Docker container registry that makes it easy for you to store, manage, and deploy Docker container images."
    },

    {
        "question": "Your development team needs a new Jenkins server for their project. You need to deploy the server using the fewest steps possible. What should you do?",
        "choices": ["A. Download and deploy the Jenkins Java WAR to App Engine Standard.", "B. Create a new Compute Engine instance and install Jenkins through the command line interface.", "C. Create a Kubernetes cluster on Compute Engine and create a deployment with the Jenkins Docker image.", "D. Use GCP Marketplace to launch the Jenkins solution."],
         "answer": "D. Use GCP Marketplace to launch the Jenkins solution.",
        "explanation": "D. Use GCP Marketplace to launch the Jenkins solution. This is the fastest and easiest way to deploy a Jenkins server on GCP. GCP Marketplace provides pre-configured and pre-packaged applications that you can launch with just a few clicks."
    },

    {
        "question": "Which GCP service enables you to configure and manage traffic routing and network policies for your virtual machines (VMs)?",
        "choices": ["A. Google Cloud Load Balancing", "B. Google Cloud VPN", "C. Google Cloud Router ", "D. Google Cloud Armor"],
         "answer": "C. Google Cloud Router ",
        "explanation": "C. Google Cloud Router "
    },
    {
        "question": "You are managing a large number of GCP resources across multiple projects. You need to ensure that billing alerts are set up for all projects. What is the most efficient way to manage these alerts?",
        "choices": ["Use Cloud Pub/Sub to broadcast alert conditions to all projects.", "Use Cloud Billing API to programmatically create alerts.", "Manually set up alerts in each project.", "Consolidate all projects under a single billing account and set up alerts there."],
         "answer": "Consolidate all projects under a single billing account and set up alerts there.",
        "explanation": "Consolidate all projects under a single billing account and set up alerts there.Consolidating all projects under a single billing account allows for centralized management of billing alerts, making the process more efficient."
    },
    {
        "question": "You are designing a microservices architecture for your application on Google Cloud. What Google Cloud service should you use to manage API traffic, apply rate limiting, and enforce security policies for your microservices?",
        "choices": ["Google Kubernetes Engine (GKE)", "Google Cloud Endpoints", "Google Cloud Pub/Sub", "Google Cloud Dataflow"],
         "answer": "Google Cloud Endpoints",
        "explanation": "Google Cloud Endpoints allows you to manage API traffic, apply rate limiting, and enforce security policies for microservices in a microservices architecture."
    },
    {
        "question": "Your company wants to implement a data warehousing solution in Google Cloud. Which service is suitable for this purpose and can handle large-scale data analytics workloads?",
        "choices": ["Google Cloud Dataflow", "Google BigQuery", "Google Cloud Datastore", "Google Cloud Dataprep"],
         "answer": "Google BigQuery",
        "explanation": "Google BigQuery is a fully managed, serverless, and highly scalable data warehousing and analytics service on Google Cloud."
    },
    {
        "question": "You need to create a Cloud SQL instance and ensure it's highly available. What configuration should you choose?",
        "choices": ["Configure the instance as a regional instance.", "Choose a machine type with high memory.", "Enable automatic backups.", "Use a larger disk size for better performance."],
         "answer": "Configure the instance as a regional instance.",
        "explanation": "Configure the instance as a regional instance.Configuring a Cloud SQL instance as a regional instance provides high availability by replicating the instance across two zones in the same region."
    },
    {
        "question": "You want to securely store your application's sensitive credentials and API keys in Google Cloud. Which Google Cloud service should you use for this purpose?",
        "choices": ["Google Cloud Identity and Access Management (IAM)", "Google Cloud Secret Manager", "Google Cloud KMS (Key Management Service)", "Google Cloud Storage"],
         "answer": "Google Cloud Secret Manager",
        "explanation": "Google Cloud Secret Manager is designed for securely storing and managing sensitive data such as credentials and API keys."
    },
    {
        "question": "Your company has multiple Google Cloud projects and wants to consolidate billing and access management across them. Which Google Cloud service allows you to achieve this?",
        "choices": ["Google Cloud Organization", "Google Cloud Resource Manager", "Google Cloud Billing", "Google Cloud IAM (Identity and Access Management)"],
         "answer": "Google Cloud Organization",
        "explanation": "Google Cloud Organization Google Cloud Organization allows you to consolidate billing and access management across multiple Google Cloud projects."
    },
    {
        "question": "You have an App Engine application built by your team that is running in your development environment. The application has successfully passed the necessary regression tests and you need to build a new project for your production environment.What should you do?",
        "choices": ["Utilize the gcloud tool to build a new project named production. Deploy your team’s application to the newly created project.", "Utilize the gcloud tool to build the new project named production. Copy the deployed application to the new project.", "Create a new project named production using the Cloud Console. Set up a Deployment Manager configuration file that replicates the current App Engine deployment into the newly created project.", "Deploy your application again using the gcloud tool and supply the project parameter named production to create the new project."],
         "answer": "Utilize the gcloud tool to build a new project named production. Deploy your team’s application to the newly created project.",
        "explanation": "Hence, the correct answer is: Utilize the gcloud tool to build a new project named production. Deploy your team’s application to the newly created project.The option that says: Create a new project named production using the Cloud Console. Set up a Deployment Manager configuration file that replicates the current App Engine deployment into the newly created project is incorrect because the Deployment Manager is not capable of replicating an App Engine deployment.The option that says: Deploy your application again using the gcloud tool and supply the project parameter named production to create the new project is incorrect because specifying the project parameter during deployment of the application in the App Engine does not automatically create a new project. You still need to create the project before deploying the application.The option that says: Utilize the gcloud tool to build the new project named production. Copy the deployed application to the new project is incorrect because you cannot just copy an application and put it in the new project. You need to use the gcloud app deploy command to deploy your application to App Engine."
    },
    {
        "question": "Your team is testing a new application hosted on a general-purpose Compute Engine instance that uses Zonal SSD Persistent Disk and Google Cloud Storage (GCS) to process and store data. Upon testing, you found out that the application encounters excessive disk read throttling. You have to provide the maximum disk throughput to improve performance in a cost-effective manner.What should you do?",
        "choices": ["Create a disk partition on the Zonal SSD Persistent Disk.", "Use a Regional SSD Persistent Disk instead of Zonal SSD Persistent Disk.", "Increase the number of CPU cores of the instance.", "Use a Local SSD instead of Zonal SSD Persistent Disk."],
         "answer": "Use a Local SSD instead of Zonal SSD Persistent Disk.",
        "explanation": "Use a Local SSD instead of Zonal SSD Persistent Disk.The option that says: Create a disk partition on the Zonal SSD Persistent Disk is incorrect because creating a disk partition doesn’t help to increase the throughput performance of a disk. Even when creating multiple partitions, the instance is still using the same Zonal SSD Persistent Disk which is not designed for high IOPS and low latency processing.The option that says: Increase the number of CPU cores of the instance is incorrect because increasing the CPU cores doesn’t improve the disk throughput. It may also be a waste of resources since the root cause of the issue is related to disk performance, and not CPU performance.The option that says: Use a Regional SSD Persistent Disk instead of Zonal SSD Persistent Disk is incorrect because Regional SSD Persistent Disk offers the same disk performance as Zonal SSD. The only difference is that Regional SSD Persistent Disk offers higher durability and data replication between two zones in the same region."
    },
    {
        "question": "Your company just deployed a major version release of its web application to Google App Engine. A few hours later, users started reporting a critical issue with the latest release. You decided to quickly revert back to the previous version of the application while your team is investigating the issue.What should you do?",
        "choices": ["Use the Cloud Console to go to the App Engine Versions page. Reroute 100% of the traffic to the previous working version of the application.", "On the Cloud Shell, execute the command gcloud components restore.", "Use the Cloud Console to go to the App Engine Versions page. Choose the previous web application version to split the traffic between the current and previous versions.", "Deploy the working version of your web app as a separate application. Go to App Engine settings and configure the application to route 100% of the traffic to the original version."],
         "answer": "Use the Cloud Console to go to the App Engine Versions page. Reroute 100% of the traffic to the previous working version of the application.",
        "explanation": "Traffic migration on App Engine switches the request routing between the versions within a service of your application, moving traffic from one or more versions to a single new version.To migrate traffic in App Engine using the Cloud Console, go to the Versions page:Select the version to which you want to migrate 100% of the traffic. Click Migrate traffic. Optional: When warmup requests are enabled, your traffic is migrated gradually. To migrate traffic immediately, select the option under the Show advanced options section"
    },
    {
        "question": "You have a technical report stored in an object in Google Cloud Storage (GCS) that needs to be evaluated by an external auditing firm. The report contains sensitive information, so you decided to limit the object’s access to four hours only. The auditing firm does not own a Google account where you can delegate the necessary privileges to access the object. You must implement a secure approach to do this task and have it done with the fewest possible steps.",
        "choices": ["Set up the storage bucket to host a static website and submit the object’s URL to the auditing firm. Manually delete the object from the Cloud Storage bucket after four hours.", "Edit the object’s permission to allow allUsers access. Add an object lifecycle policy to delete the object after four hours.", "Generate a signed URL and specify the expiration to four hours. Share the signed URL with the auditing firm.", "Provision a new bucket dedicated for the auditing firm. Move the object to the new bucket. Create an object lifecycle policy to remove the object after four hours."],
         "answer": "Generate a signed URL and specify the expiration to four hours. Share the signed URL with the auditing firm.",
        "explanation": "Signed URLs give time-limited read or write access to a specific Cloud Storage resource. Anyone in possession of the signed URL can use it while it’s active, regardless of whether they have a Google account."
    },
    {
        "question": "You just finished building an application and you deployed it on a Google Kubernetes Engine (GKE) cluster in a custom-mode VPC in the us-west1 region. The application exposes a TCP endpoint backed with several replicas of the application.You are running another Compute Engine instance located in the same region as your cluster, but in a different custom-mode VPC called td-compute-network. The CIDR ranges of the two VPCs do not overlap. You have to establish a connection between your Compute Engine instance and the application on GKE.You want to reduce the amount of work required to accomplish the task. What should you do?",
        "choices": ["1. Provision a Service of type LoadBalancer that uses the application’s Pods as its backend.2. Use Cloud Armor Security Policy to the load balancer to whitelist the internal IP addresses of the instances found in the managed instance group.3. Connect the two VPCs using VPC Peering.4. Configure the Compute Engine instance to use the IP address of the load balancer that you just created.", "1. Provision a Service of type LoadBalancer that uses the application’s Pods as its backend.2. Set the externalTrafficPolicy value to Cluster in the Service configuration file.3. Configure the Compute Engine instance to use the IP address of the load balancer that you just created.", "1. Provision a Service of type NodePort that uses the application’s Pods as its backend.2. Build a new Compute Engine instance named proxy with two network interfaces, each assigned to a VPC.3. Manage iptables rule on the new instance to forward traffic coming from the td-compute-network to the GKE nodes.4. Set up your Compute Engine instance to use the address of proxy in td-compute-network as endpoint.", "1. Provision a Service of type LoadBalancer that uses the application’s Pods as its backend.2. Set the annotation for the service’s metadata to service: cloud.google.com/load-balancer-type: Internal 3. Connect the two VPCs using VPC Peering.4. Configure the Compute Engine instance to use the IP address of the load balancer that you just created."],
         "answer": "1. Provision a Service of type LoadBalancer that uses the application’s Pods as its backend.2. Set the annotation for the service’s metadata to service: cloud.google.com/load-balancer-type: Internal 3. Connect the two VPCs using VPC Peering.4. Configure the Compute Engine instance to use the IP address of the load balancer that you just created.",
        "explanation": "When you specify type:LoadBalancer in the resource manifest, GKE creates a Service of the type LoadBalancer. GKE makes the appropriate Google Cloud API calls to create either an external network load balancer or an internal TCP/UDP load balancer. GKE creates an internal TCP/UDP load balancer when you add the cloud.google.com/load-balancer-type: Internal annotation; otherwise, GKE creates an external network load balancer."
    },
    {
        "question": "Your company has deployed multiple GCP resources that span across various projects and are linked to different billing accounts. Your finance team is currently analyzing cost patterns on your company’s cloud expenditure and asked you to provide a dashboard to visualize all the costs incurred. You want to finish the task as quickly as possible.",
        "choices": ["Go to the Billing page in the GCP Console. Export your Cloud Billing data to a CSV file.", "Export your Cloud Billing data to BigQuery. Use Google Data Studio to visualize the data.", "Export your Cloud Billing data to BigQuery. Use the Data Catalog to visualize the Cloud Billing data.", "Use the GCP Pricing Calculator to analyze the cost."],
         "answer": "Export your Cloud Billing data to BigQuery. Use Google Data Studio to visualize the data.",
        "explanation": "Data visualization tools can help you make sense of your BigQuery data and help you analyze the data interactively. You can use visualization tools to help you identify trends, respond to them, and make predictions using your data.Data Studio is a free data visualization tool from Google that helps you analyze and visualize your data by creating interactive and fully customizable dashboards and reports.You can use Google Data Studio to get up-to-date Cloud Billing graphs throughout the day and use labels to slice and dice your Google Cloud bill. To do this, you need to export your Cloud Billing data to a BigQuery dataset and then use this as a data source for your Data Studio report."
    },
    {
        "question": "A company has an application that uses Cloud Spanner as its backend database. After a few months of monitoring your Cloud Spanner resource, you noticed that the incoming traffic of the application has a predictable pattern. You need to set up automatic scaling that will scale up or scale down your Spanner nodes based on the incoming traffic. You don’t want to use an open-source tool as much as possible.",
        "choices": ["Set up an Autoscaler infrastructure in the same project where the Cloud Spanner is deployed to automatically scale the Cloud Spanner resources according to its CPU metric.", "Set up an alerting policy on Cloud Monitoring that sends an email alert to on-call Site Reliability Engineers (SRE) when the Cloud Spanner CPU metric exceeds the desired threshold. The SREs shall scale the resources up or down appropriately.", "Set up an alerting policy on Cloud Monitoring that sends an alert to a webhook when the Cloud Spanner CPU metric is over or under your desired threshold. Create a Cloud Function that listens to this HTTP webhook and resizes Spanner resources appropriately.", "Set up an alerting policy on Cloud Monitoring that sends an email alert to Google Cloud Support email when the Cloud Spanner CPU metric exceeds the desired threshold. The Google Support team shall scale the resources up or down appropriately."],
         "answer": "Set up an alerting policy on Cloud Monitoring that sends an alert to a webhook when the Cloud Spanner CPU metric is over or under your desired threshold. Create a Cloud Function that listens to this HTTP webhook and resizes Spanner resources appropriately.",
        "explanation": "In the scenario, you have to find a method where you can automatically scale your Cloud Spanner resources based on a traffic pattern. As much as possible, you also don’t want to use an open-source tool. Since Cloud Spanner does not scale automatically, you have to check for CPU usage of your Spanner instances and find a way to trigger your Cloud Spanner database to scale its resources accordingly. Moreover, you have to ensure that these steps are done automatically."
    },
    {
        "question": "A new auditor joins your organization and you need to add him to your team’s Google Cloud project. The auditor needs to have read access permissions but should be restricted from modifying resources in the project.How should you grant the necessary permissions to the new auditor?",
        "choices": ["Build a custom IAM role with view-only project permissions and attach it to the user's account.", "Build a custom IAM role with view-only service permissions and attach it to the user's account.", "Use the built-in existing IAM service Viewer role to grant the required permissions. Attach this role to the user's account.", "Use the built-in IAM project Viewer role to grant the required permissions. Attach this role to the user's account."],
         "answer": "Use the built-in IAM project Viewer role to grant the required permissions. Attach this role to the user's account.",
        "explanation": "There are several basic roles that existed prior to the introduction of IAM: Owner, Editor, and Viewer. These roles are concentric; that is, the Owner role includes the permissions in the Editor role, and the Editor role includes the permissions in the Viewer role. They were originally known as “primitive roles.”"
    },
    {
        "question": "Your organization plans to backup a 32 GB CCTV footage stored in a single file to a Nearline Storage bucket. For this task, a 1 Gbps WAN connection has been dedicated for your exclusive use. You want to maximize your connection speed as much as possible so you can upload the files to Cloud Storage at the quickest time.What do you think should be done to upload the file rapidly?",
        "choices": ["Using gsutil, activate parallel composite uploads during the file transfer for faster upload.", "Set the storage class of the bucket from Nearline to Regional.", "Use the Cloud Storage browser in the Google Cloud Console to upload the file.", "Lower down the value of the TCP window size when you upload the file to Cloud Storage."],
         "answer": "Using gsutil, activate parallel composite uploads during the file transfer for faster upload.",
        "explanation": "One strategy for uploading large files is called parallel composite uploads. In this upload method, a file is divided into up to 32 chunks. The chunks are uploaded in parallel to temporary objects, the final object is recreated using the temporary objects, and the temporary objects are deleted. You can use this to speed up file uplaods if disk speed and network speed are not a bottleneck."
    },
    {
        "question": "Your company has a live application deployed in a Google App Engine environment. You developed a new version of the application containing several new enhancements and you want to test it first with only 1% of users before entirely switching over to the new version.",
        "choices": ["Use gcloud app deploy to deploy a new version of the app with --traffic-split flag to split the traffic between the current and new version.", "Use gcloud app create to deploy a new app with --traffic-split flag to split the traffic between the current and new app.", "Deploy a new application that includes the enhancements. Configure App Engine to split traffic between the two applications.", "Deploy a new version of the app that includes the enhancements. Configure App Engine to split traffic between the current and new versions."],
         "answer": "Deploy a new version of the app that includes the enhancements. Configure App Engine to split traffic between the current and new versions.",
        "explanation": "Google App Engine allows you to split traffic between application versions. Traffic splitting distributes a percentage of traffic to versions of your application. You can split traffic to move 100% of traffic to a single version or to route percentages of traffic to multiple versions. Splitting traffic to two or more versions allows you to conduct A/B testing between your versions and provides control over the pace when rolling out features. YOU CAN SPLIT TRAFFIC BETWEEN TWO VERSION BUT NOT BETWEEN TWO APPS"
    },
    {
        "question": "You are currently investigating an issue that requires you to access and analyze the audit logs of several GCP projects. You need to run custom queries against these logs for the past 60 days in the easiest way possible. You want to follow Google-recommended best practices.",
        "choices": ["Configure a Cloud Function that will export all the logs to a Cloud Engine instance from Cloud Logging. Delete the Cloud Engine instance after 60 days.", "In the Google Cloud Console, export the audit logs from Cloud Logging and select Cloud Storage as the Sink destination. Create a bucket lifecycle rule to remove objects after 60 days.", "Go to Cloud Logging and select all projects in the search filter.", "Export the audit logs from Cloud Logging and select a BigQuery dataset as the Sink destination. Configure the table expiration to 60 days."],
         "answer": "Export the audit logs from Cloud Logging and select a BigQuery dataset as the Sink destination. Configure the table expiration to 60 days.",
        "explanation": "BigQuery is a serverless, highly scalable, and cost-effective multi-cloud data warehouse service. You can use SQL to quickly analyze large data like Cloud Logging logs with ease using this service. You can also set a table expiration to automate deletion to save cost. YOU USE BIGQUERY TO ANALYZE LOGS"
    },    {
        "question": "Your company has a mission-critical application deployed on Google Compute Engine. You want to avoid the accidental deletion of this instance.What should you do?",
        "choices": ["Add the tag DeletionProtection with the value set to Yes.", "Turn on the Deletion Protection feature on the instance.", "Create a snapshot of the instance.", "Deploy the application in a Managed Instance Group and add a health check to monitor the instance."],
         "answer": "Turn on the Deletion Protection feature on the instance.",
        "explanation": "The Google Compute Engine has a Deletion Protection feature that prevents users from accidentally deleting an instance. This is a must-have feature for instances with critical workloads. You can enable this upon instance creation or in the management section of an existing instance."
    },
    {
        "question": "Your company just started using Google Cloud Platform to host their application. You are tasked to ensure that the finance department can only view the billing reports of all of the company’s GCP projects. You want to follow Google’s recommended best practices.",
        "choices": ["Create a group for the finance department. Grant the roles/billing user role to the finance group.", "Create a group for the finance department. Grant the roles/billing viewer role to the finance group.", "Grant the roles/billing user role to finance users individually.", "Grant the roles/billing viewer role to finance users individually."],
         "answer": "Create a group for the finance department. Grant the roles/billing viewer role to the finance group.",
        "explanation": "To view the Cloud Billing reports for your Cloud Billing account, including viewing the cost information for all of the Cloud projects that are linked to the account, you need to be a Billing Account Administrator or Billing Account Viewer on your Cloud Billing account."
    },
    {
        "question": "You are working as a Cloud Security Officer in your company. You are asked to log all read requests and activities on your Cloud Storage bucket where you store all of the company’s sensitive data. You need to enable this feature as soon as possible because this is also a compliance requirement that will be checked on the next audit.What should you do?",
        "choices": ["Enable Data Access audit logs for Cloud Storage", "Enable Object Versioning on the bucket.", "Enable Certificate Authority (CA) Service on the bucket.", "Enable Identity-Aware Proxy feature on the Cloud Storage."],
         "answer": "Enable Data Access audit logs for Cloud Storage",
        "explanation": " Data Access logs: Entries for operations that modify objects or read a project, bucket, or object. There are several sub-types of data access logs."
    },
    {
        "question": "Your company conducts a quarterly security audit as part of its effort to comply with government requirements. You are assigned to provide IAM access to some external auditors on your company’s BigQuery audit logs. You want to follow Google-recommended practices.What should you do?",
        "choices": ["Attach the auditors’ accounts to the logging.viewer and bigQuery.dataViewer predefined IAM roles.", "Create two new custom IAM roles. Add the auditors' group to the new custom roles.", "Create two new custom IAM roles. Add the auditor user accounts to the new custom roles.", "Create a new Google group for the auditors. Attach the logging.viewer and bigQuery.dataViewer predefined IAM roles to the newly created group."],
         "answer": "Create a new Google group for the auditors. Attach the logging.viewer and bigQuery.dataViewer predefined IAM roles to the newly created group.",
        "explanation": "Rather than directly assigning permissions, you assign roles. IAM roles are collections of permissions. For example, the BigQuery Data Viewer role contains the permissions to list, read, and query BigQuery tables, but does not include permissions to create new tables or modify existing data. IAM provides many predefined roles to handle a wide range of common use cases. It also enables you to create custom roles."
    },
    {
        "question": "All employees in your organization have a Google account. Your operations team needs to manage over a hundred Compute Engine instances. The members of this team must be provided only with administrative access to the VM instances. Moreover, the security team wants to audit instance logins and ensure that the provision of credentials is operationally efficient.What should you do?",
        "choices": ["Require each member of the team to generate a new SSH key pair. Have them send their public key to you. Utilize a configuration management tool to deploy those SSH keys on each instance.", "Create a new SSH key pair. Issue the private key to each member of the team. Configure the public key in the metadata of each instance.", "Create a new SSH key pair. Issue the private key to each member of the operations team. Configure the public key as a project-wide public SSH key in your project. Lastly, allow project-wide public SSH keys on each instance.", "Require each member of the team to generate a new SSH key pair and to add the public key to their respective Google account. Then grant the compute.osAdminLogin role to the corresponding Google group of the operations team."],
         "answer": "Require each member of the team to generate a new SSH key pair and to add the public key to their respective Google account. Then grant the compute.osAdminLogin role to the corresponding Google group of the operations team.",
        "explanation": "Each member needs tp generate a key pair to ensure integrity. The public key is then added to the Google account of the team member. The compute.osAdminLogin role is granted to the corresponding Google group of the operations team."
    },
    {
        "question": "Your company is having its yearly audit. You need to grant access to a group of auditors who want to view the folders and project hierarchy on your company’s GCP account. You want to follow Google-recommended best practices.What should you do?",
        "choices": ["Create a group for the auditors. Grant roles/browser role to the group.", "Create a group for the auditors. Grant roles/viewer role to the group", "Grant roles/browser role to the auditors individually.", "Grant roles/viewer role to the auditors individually."],
         "answer": "Create a group for the auditors. Grant roles/browser role to the group.",
        "explanation": "Need to make a group for the auditors. Use the roles/browser role as it allows them to view the project and folder hierarchy."
    },
    {
        "question": "You are training four newly hired junior cloud engineers in your company. Part of their training is to familiarize themselves with Cloud Spanner. You need to provide access to these four users to view and edit table information on a Cloud Spanner instance found in the test project.What should you do?",
        "choices": ["Using the gcloud tool, execute the gcloud iam roles describe roles/spanner.viewer --project my-project command on Cloud Shell. Attach the users to a newly created Google group and add the group to the role.", "Using the gcloud tool, execute the gcloud iam roles describe roles/spanner.viewer --project my-project command on Cloud Shell. Attach the users to the role.", "Using the gcloud tool, execute the gcloud iam roles describe roles/spanner.databaseUser command on Cloud Shell. Attach the users to a newly created Google group and add the group to the role.", "Using the gcloud tool, execute the gcloud iam roles describe roles/spanner.databaseUser command on Cloud Shell. Attach the users to the role."],
         "answer": "Using the gcloud tool, execute the gcloud iam roles describe roles/spanner.databaseUser command on Cloud Shell. Attach the users to a newly created Google group and add the group to the role.",
        "explanation": "The predefined role roles/spanner.databaseUser contains the permissions spanner.databases.read and spanner.database.write."
    },
    {
        "question": "Your company is having its yearly business audit. Your external editor needs to review the Data Access and Access Transparency audit logs of your Google Cloud Platform account. Your company also wants to keep a copy of these logs as a reference for the next audit. You want to follow Google-recommended practices on granting Cloud IAM roles.What should you do?",
        "choices": ["Grant the external auditor a custom role that has logging.logs.list and logging.logServices.list permissions. Create a log sink and export the logs to BigQuery.", "Grant the external auditor the roles/logging.privateLogViewer IAM role. Create a log sink and export the logs to Cloud Storage.", "Grant the external auditor the roles/logging.viewer IAM role. Create a log sink and export the logs to Cloud Storage.", "Grant the external auditor the Project Viewer IAM role. Create a log sink and export the logs to BigQuery."],
         "answer": "Grant the external auditor the roles/logging.privateLogViewer IAM role. Create a log sink and export the logs to Cloud Storage.",
        "explanation": "Logs Viewer ( roles/logging.viewer ) – gives you read-only access to all features of Logging, except Access Transparency logs and Data Access audit logs.Private Logs Viewer ( roles/logging.privateLogViewer ) – includes roles/logging.viewer, plus the ability to read Access Transparency logs and Data Access audit logs."
    },
    {
        "question": "You are running a group of Compute Engine instances on the Google Cloud Platform. You want to set up the necessary permissions to allow all of your instances to write data into a specific Cloud Storage bucket. You want to follow Google-recommended practices.What should you do?",
        "choices": ["Using the GCP Console, create a service account with an IAM role of storage.objectCreator. Use it for your GCE instances to get write permissions on the bucket.", "Create an authentication request from your application to access the Google API with https://www.googleapis.com/auth/devstorage.read_only as an access scope.", "Using the GCP Console, create a service account with an IAM role of storage.objectAdmin. Use it for your GCE instances to get write permissions on the bucket.", "Create an authentication request from your application to access Google API with https://www.googleapis.com/auth/compute as an access scope."],
         "answer": "Using the GCP Console, create a service account with an IAM role of storage.objectCreator. Use it for your GCE instances to get write permissions on the bucket.",
        "explanation": "Storage Object Creator (roles/storage.objectCreator) – allows users to create objects. It does not give permission to view, delete, or overwrite objects.Storage Object Admin (roles/storage.objectAdmin) – grants full control over objects, including listing, creating, viewing, and deleting objects."
    },
    {
        "question": "A senior developer in your company is assigned to manage and create service accounts for your company’s Google Cloud projects. You have to make sure that the assigned personnel is granted the least permissions to manage the projects.What should you do?",
        "choices": ["Grant the roles/iam.roleAdmin role to the senior developer’s account.", "Grant the roles/iam.serviceAccountAdmin role to the senior developer’s account.", "Grant the roles/iam.serviceAccountKeyAdmin role to the senior developer’s account.", "Grant the roles/iam.serviceAccountUser role to the senior developer’s account."],
         "answer": "Grant the roles/iam.serviceAccountAdmin role to the senior developer’s account.",
        "explanation": "roles/iam.roleAdmin – Provides access to all custom roles in the project.roles/iam.serviceAccountKeyAdmin – Create and manage (and rotate) service account keys.roles/iam.serviceAccountUser – Run operations as the service account.roles/iam.serviceAccountAdmin – Create and manage service accounts."
    },
    {
        "question": "Your company is deploying an application to a Compute Engine VM instance that will run in Windows 10. You want to remotely access the instance using the Remote Desktop Protocol (RDP) to install and manage custom applications.What should you do?",
        "choices": ["Set the credentials by adding Username and Password on the VM instance Tag.", "Use the gcloud compute reset-windows-password command to retrieve credentials of the instance.", "Use the gcloud compute get-windows-password command to retrieve the credentials of the instance.", "Set the credentials by defining Username and Password on the VM instance metadata."],
         "answer": "Use the gcloud compute reset-windows-password command to retrieve credentials of the instance.",
        "explanation": "You can generate Windows passwords using either the Google Cloud Console or the gcloud command-line tool. If you forget your password, you can also use this procedure to reset it.Use the gcloud compute reset-windows-password command to create a new account and password or reset the existing account password for the logged-in user:"
    },
    {
        "question": "Your company has an application hosted on a VM instance in Google Compute Engine. This application is configured to persist its system logs on the disk. You want to stream the application logs to troubleshoot a user-reported issue.What should you do?",
        "choices": ["In the GCP Console, go to Cloud Logging and view the application logs.", "Connect to the instance using the interactive serial console and download the application logs.", "Configure a custom script that copies application logs to a Cloud Storage bucket.", "Configure the Cloud Logging Agent on the VM instance to collect the logs. Navigate to Cloud Logging in the GCP console to view the logs."],
         "answer": "Configure the Cloud Logging Agent on the VM instance to collect the logs. Navigate to Cloud Logging in the GCP console to view the logs.",
        "explanation": "Cloud Logging Agent allows you to stream logs of common third-party applications and system software. You can view these logs on Cloud Logging. Logging agent can be installed on a VM running on either Linux or Windows. You can also use this to collect logs from an Amazon EC2 instance and on-premises environment."
    },
    {
        "question": "You are working for a startup that wants to track the operational costs of its cloud resources. The startup has three separate projects on the Google Cloud Platform. You need to analyze your cost estimates on a daily and monthly basis as well as by service type across all projects for the next six months. You also want to use standard query syntax for cost analysis.What should you do?",
        "choices": ["Enable billing data export on your Cloud Billing Account. Export your billing report to a Cloud Storage bucket and import it into Google Sheets to conduct the analysis.", "Enable billing data export on your Cloud Billing Account. Export your billing report to a BigQuery dataset and write SQL queries for analysis.", "Enable billing data export on your Cloud Billing Account. Export your billing to a Cloud Storage bucket and import it into Cloud Bigtable to conduct the analysis.", "Enable billing data export on your Cloud Billing Account. Export your billing transactions to a JSON file, and produce a summary report using a desktop tool."],
         "answer": "Enable billing data export on your Cloud Billing Account. Export your billing report to a BigQuery dataset and write SQL queries for analysis.",
        "explanation": "Cloud Billing export to BigQuery enables you to export detailed Google Cloud billing data (such as usage, cost estimates, and pricing data) automatically throughout the day to a BigQuery dataset that you specify. Then you can access your Cloud Billing data from BigQuery for detailed analysis, or use a tool like Google Data Studio to visualize your data"
    },
    {
        "question": "Your company wants to review the IAM users and roles assigned on a specific Google Cloud project named finance-project. What should you do to fulfill this requirement?",
        "choices": ["Set up the Cloud SDK to run the gcloud iam roles list command and review the output.", "Using the Cloud Console, navigate to the finance-project, and go to the Roles section. From there, review the Roles and Status of the project.", "Using the Cloud Console, navigate to the finance-project, and go to the IAM section. Under the 'Permissions' tab, review the Members and Roles section.", "Use the Cloud Shell to run the gcloud iam service-accounts list command and then review the output."],
         "answer": "Using the Cloud Console, navigate to the finance-project, and go to the IAM section. Under the 'Permissions' tab, review the Members and Roles section.",
        "explanation": ""
    },
    {
        "question": "You are managing your company’s cloud resources that are residing in multiple GCP projects. You are tasked to set up centralized monitoring of all the CPU, memory, and disk metrics of your resources. You want to follow Google’s recommended best practices. What should you do",
        "choices": ["Create an export sink on each project. Export the logs on a single BigQuery dataset.", "Enable Cloud Monitoring on all projects to monitor all resources. Create a custom application that processes metrics from Cloud Monitoring.", "Configure Metrics Scope in Cloud Monitoring. Create a new scoping project and include all GCP Projects for monitoring.", "Deploy a Cloud Monitoring agent on all projects to collect metrics. Create an application that consumes and presents these metrics."],
         "answer": "Configure Metrics Scope in Cloud Monitoring. Create a new scoping project and include all GCP Projects for monitoring.",
        "explanation": "A scoping project hosts a metrics scope. Because every Google Cloud project hosts a metrics scope, every project is also a scoping project. The scoping project stores information about its metrics scope. It also stores the alerts, uptime checks, dashboards, and monitoring groups that you configure for the metrics scope. You can identify the scoping project for a metrics scope as the project selected by the Cloud Console project picker."
    },
    {
        "question": "Your company has 1 TB of unstructured data in various file formats that are securely stored on its on-premises data center. The Data Analytics team needs to perform ETL (Extract, Transform, Load) processes on these data which will eventually be consumed by a Dataflow SQL job.What should you do?",
        "choices": ["Using the gsutil command-line tool in Cloud SDK, move your on-premises data to Cloud Storage.", "Run a Dataflow import job using gcloud to upload the data into Cloud Spanner.", "Use the Google Cloud Console to import the unstructured data by performing a dump into Cloud SQL.", "Use the bq command-line tool in Cloud Shell and upload your on-premises data to Google BigQuery."],
         "answer": "Using the gsutil command-line tool in Cloud SDK, move your on-premises data to Cloud Storage.",
        "explanation": "It is stated in the scenario that you need to upload unstructured data to the Google Cloud. Among the possible sources of data for running a Dataflow SQL job, Google Cloud Storage is the only storage that can support various data formats or unstructured data."
    },
    {
        "question": "You created a test project on GCP and defined the appropriate IAM roles that will be used by the users. You now need to replicate the exact same IAM roles on the production project. Your manager wants you to accomplish this task with the fewest possible steps.",
        "choices": ["Using the Cloud Shell, run the gcloud iam roles copy command and specify the production project as the destination project.", "Utilize the CREATE ROLE FROM SELECTION functionality found in the IAM page.", "Utilize the CREATE ROLE functionality in the Cloud Console and select all applicable permissions.", "Using the Cloud Shell, run the gcloud iam roles copy command and specify your organization as the destination organization."],
         "answer": "Using the Cloud Shell, run the gcloud iam roles copy command and specify the production project as the destination project.",
        "explanation": "The gcloud iam roles copy command creates a role from an existing role into an another project. "
    },
    {
        "question": "You are assigned to deploy an application to Compute Engine on a managed instance group (MIG). You need to ensure that the application is up and running at all times, but there should only be one VM instance running on the project at any given time to save costs. What should you do?",
        "choices": ["While creating the MIG, configure the autoscaling setting to On. Set the minimum number of instances to 1. Then set the maximum number of instances to 1.", "Upon creation of the MIG, configure the autoscaling to Don’t Autoscale. Set the minimum number of instances to 1. Then set the maximum number of instances to 1.", "While creating the MIG, configure the autoscaling setting to On. Set the minimum number of instances to 1. Then set the maximum number of instances to 2", "Upon creation of the MIG, configure the autoscaling setting to Don’t Autoscale. Set the minimum number of instances to 1. Then set the maximum number of instances to 2."],
         "answer": "While creating the MIG, configure the autoscaling setting to On. Set the minimum number of instances to 1. Then set the maximum number of instances to 1.",
        "explanation": "You need autoscaling enabled incase of failure of the VM. The minimum number of instances should be 1 and the maximum number of instances should be 1."
    },
    {
        "question": "You have a microservice running on Google Kubernetes Engine (GKE) cluster running on asia-southeast1 region. The GKE cluster has the autoscaler feature enabled. You realized that you need to monitor containers in your cluster. You have to deploy a monitoring pod on each node of your cluster that transmits container metrics to a third-party cloud monitoring system.What should you do?",
        "choices": ["Deploy the monitoring pod into your cluster in a DaemonSet object.", "Deploy the monitoring pod into your GKE cluster inside a StatefulSet object.", "Create a Service object that references the monitoring pod.", "Reference the monitoring pod into your cluster in a Deployment object."],
         "answer": "Deploy the monitoring pod into your cluster in a DaemonSet object.",
        "explanation": "DaemonSets are useful for deploying ongoing background tasks that you need to run on all or certain nodes and do not require user intervention. Examples of such tasks include storage daemons like ceph, log collection daemons like fluentd, and node monitoring daemons like collectd."
    },
    {
        "question": "What is the purpose of using a Virtual Private Network",
        "choices": ["Its a virtual network implemented insiden of Google's prodction network", "To launch VM's into production ", "It is a method to detect security vulnerabilities", "To enable a secure communication method to connect two trusted enviroments through the internet"],
         "answer": "To enable a secure communication method to connect two trusted enviroments through the internet",
        "explanation": "Cloud VPN Securely connects your on-premises network to Google Cloud using an IPsec VPN tunnel. Cloud VPN is a fully-managed service that provides a highly available and scalable solution for connecting your on-premises network to your Google Cloud network. Cloud VPN is a fully-managed service that provides a highly available and scalable solution for connecting your on-premises network to your Google Cloud network."
    },
    {
        "question": "An application runs on your on premises datacenter and uses MySQL as a database engine. You want to migrate your database to the Google Cloud. Which storage service should you use?",
        "choices": ["Cloud Storage", "Cloud Spanner", "Cloud SQL", "Cloud Bigtable"],
         "answer": "Cloud SQL",
        "explanation": "Cloud SQL is a fully-managed database service that helps you set up, maintain, and manage your relational databases in the cloud. It supports several popular open-source database engines, including MySQL, PostgreSQL, and SQL. Cloud SQL is a fully-managed database service that helps you set up, maintain, and manage your relational databases in the cloud. It supports several popular open-source database engines, including MySQL, PostgreSQL, and SQL Server."
    },
    {
        "question": "Suppose you have two GCP projects. Each project has a different default region and zone. You want to effciently create a virtual machine in each of these projects using gcloud. What should you do",
        "choices": ["You should create these virtual machines manually", "You should create new named configurations using gcloud config configurations create [config name] for each project. Then, execute config list command.", "You cannot automate this process", "You should create new named configurations using gcloud config configuration create [config name] for each project. Then execute gcloud config configurations activate [config name] for each project. Then execute gclooud config configurations activate [config name] to activate the first configuration, and gcloud compute instances create to create the VM. Repeat the steps for the second configuration"],
         "answer": "You should create new named configurations using gcloud config configuration create [config name] for each project. Then execute gcloud config configurations activate [config name] for each project. Then execute gclooud config configurations activate [config name] to activate the first configuration, and gcloud compute instances create to create the VM. Repeat the steps for the second configuration",
        "explanation": "A configuration is named set of Google Cloud CLI properties. These properties are key-value pairs, organized in sections, that govern the behavior of the gcloud CLI"
    },
    {
        "question": "As a Cloud Engineer, you are responsible for monitoring all changes in Cloud Storage bucket. For each change, you must invoke an action that will verify the compliance of the change in near real-time What should you do?",
        "choices": ["You should use a Python script to get appropriate logs, analyze them, and run the security script", "You should use Cloud Function events, and call your security script from the Cloud Function triggers", "You should use Crone Scheduler to schedule your security script", "You should use the built-in traiggering mechanism of Cloud Storage to run your security script"],
         "answer": "You should use Cloud Function events, and call your security script from the Cloud Function triggers",
        "explanation": "Using Cloud Function is correct because it provides fast response and requires the minimal amount setup"
    },
    {
        "question": "You have a staic website to host. Which storage service will you use ?",
        "choices": ["Cloud SDK", "Cloud Endpoints", "Cloud Storage", "Cloud Datastore"],
         "answer": "Cloud Storage",
        "explanation": "Cloud Storage is an objet storage for companies of all sizes. Store any amount of data. Retrieve it as often as you'd like. Cloud Storage allows world-wide storage and retrieval of any amount of data at any time"
    },
    {
        "question": "Compute Engine virtual machines are ",
        "choices": ["global", "regional", "zonal", "multi-regional"],
         "answer": "zonal",
        "explanation": "Compute engine is a computing and hosting service that lets you create and run virtual machines on Google Infrastructure."
    },
    {
        "question": "To offer transactional consistency at gloabl scale you should use ...",
        "choices": ["Cloud SQL", "Cloud Spanner", "Cloud Bigtable", "Cloud Datastore"],
         "answer": "Cloud Spanner",
        "explanation": "Cloud Spanner is a fully managed, mission-critical database service that offers transactional consistency at global scale, so you can elastically scale your workload and pay only for the resources you use. Cloud Spanner is a fully managed, mission-critical database service that offers transactional consistency at global scale, so you can elastically scale your workload and pay only for the resources you use."
    },
    {
        "question": "Select all basic (primitive) IAM roles in GCP",
        "choices": ["Admin", "Editor", "Viewer", "Owner"],
         "answer": ["Viewer", "Owner","Editor"],
        "explanation": "There are several basic roles that existed prior to the introudction of IAM: Owner, Editor and Viewer. These roles are still available in IAM, but they are not considered to be basic roles anymore. They are now considered to be composite roles. The basic roles are: Owner, Editor and Viewer."
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },








    
// Add More Questions
];

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length);
let randomQuestions = getRandomQuestions(20);

function getRandomQuestions(num) {
    let shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function displayQuestion(index) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    const question = randomQuestions[index];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;
    
    const choicesUl = document.createElement('ul');
    choicesUl.classList.add('choices');
    question.choices.forEach((choice, choiceIndex) => {
        const choiceLi = document.createElement('li');
        choiceLi.innerHTML = `
            <label>
                <input type="radio" name="question${index}" value="${choice}" ${userAnswers[index] === choice ? 'checked' : ''}>
                ${choice}
            </label>
        `;
        choicesUl.appendChild(choiceLi);
    });

    questionDiv.appendChild(choicesUl);
    quizContainer.appendChild(questionDiv);
}

function nextQuestion() {
    if (currentQuestionIndex < randomQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
        document.getElementById('submitBtn').innerText = 'Submit Answer';
        document.getElementById('submitBtn').onclick = submitAnswer;
        document.getElementById('result').innerHTML = '';
    } else {
        submitQuiz();
    }
}

function saveAnswer() {
    const selectedAnswer = document.querySelector('input[name="question' + currentQuestionIndex + '"]:checked');
    if (selectedAnswer) {
        userAnswers[currentQuestionIndex] = selectedAnswer.value;
    }
}

function submitAnswer() {
    saveAnswer();
    const quizContainer = document.getElementById('quiz');
    const selectedAnswer = document.querySelector('input[name="question' + currentQuestionIndex + '"]:checked');
    const question = randomQuestions[currentQuestionIndex];
    if (selectedAnswer) {
        const isCorrect = selectedAnswer.value === question.answer;
        // Highlight the selected answer
        const answerLabel = selectedAnswer.parentElement;
        answerLabel.classList.add(isCorrect ? 'correct' : 'incorrect');

        // Highlight the correct answer
        const allChoices = document.querySelectorAll('input[name="question' + currentQuestionIndex + '"]');
        allChoices.forEach(choice => {
            if (choice.value === question.answer) {
                choice.parentElement.classList.add('correct');
            }
        });

        // Add explanation
        const explanationDiv = document.createElement('div');
        explanationDiv.classList.add('explanation');
        explanationDiv.innerText = question.explanation;
        quizContainer.appendChild(explanationDiv);

        document.getElementById('submitBtn').innerText = 'Next';
        document.getElementById('submitBtn').onclick = nextQuestion;
    } else {
        alert('Please select an answer before submitting.');
    }
}
function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswers = [];
    
    // Convert answer to array if it isn't already
    const correctAnswers = Array.isArray(currentQuestion.answer) 
        ? currentQuestion.answer 
        : [currentQuestion.answer];
    
    // Use checkboxes if multiple correct answers exist
    const isMultipleSelect = correctAnswers.length > 1;
    const inputType = isMultipleSelect ? 'checkbox' : 'radio';
    
    // Collect all selected answers
    document.querySelectorAll(`input[type="${inputType}"]:checked`).forEach(input => {
        selectedAnswers.push(input.value);
    });
    
    return selectedAnswers;
}



function submitQuiz() {
    saveAnswer(); // Save the current answer
    let score = 0;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear the previous results

    // Iterate through random questions and evaluate user answers
    randomQuestions.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.answer;
        const questionResult = document.createElement('div');
        questionResult.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <p class="${isCorrect ? 'correct' : 'incorrect'}">
                Your answer: ${userAnswers[index] || 'No answer'}
            </p>
            <p class="explanation">${question.explanation}</p>
        `;
        resultDiv.appendChild(questionResult);

        if (isCorrect) {
            score++; // Increment score for correct answers
        }
    });

    // Display the total score
    const scoreDiv = document.createElement('div');
    scoreDiv.classList.add('result');
    scoreDiv.innerText = `You scored ${score} out of ${randomQuestions.length}.`;
    resultDiv.appendChild(scoreDiv);
}

// Ensure the first question is displayed on page load
window.onload = () => displayQuestion(currentQuestionIndex);

