# J & D Landscaping Website

This project is using the [Next.js](https://github.com/vercel/next.js/) for the framework.

## Development Guideline

First, run the development server: (supposed to use Yarn for the node package manager)

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

We are using the Amazon for the hosting service.

* Route 53 for the DNS management.
* EC2 instance is running for the server.
* Security Group + Target Group + Load Balancer for additional configuration along with Amazon Certificate Manager.

### Git Conventions

* Work should be done on your own branches maybe `dev`, also `master` is fine, because `master` is not connected to the deployment script.
* `master` branch is not the production yet, only `prod` is for the production
* !!! Don't work on the `prod` branch directly.
* !!! All deployments must follow these steps `dev` -> `master` -> `prod`. This is for preventing any unexpected issues happening on the production server.
* Automatic deployment is not configured here yet. To deploy your changes, please follow the [Manual Deployment Guideline](#manual-deployment).
* While contributing the project, make sure all [actions](https://github.com/Jobhubgroup/jd-landing-next/actions) for your commits.
* !!! Please don't try to do deployment until your commits pass the pipeline.
* Current pipeline is doing checks lint check and build check.

### Manual Deployment

* Login to Amazon console, with credentials.
* Go to service - EC2 and select the instance and connect to it via Web Monitor tool or putty whatever we can choose. Instance name is `jd-landing` and instance id is `i-0a8e7bf6fe4396b93`
* After the connection, there are mainly two folders - `jobs` and `projects`
* You can check predefined scripts in `jobs` folder.
* [pm2](https://pm2.io) app name is `jd-landing`, check pm2 status by using `sudo pm2 list` command.
* To update the new changes to the server, just need to do `git pull` (!!!this must be for the `prod` branch for sure) and `yarn build`, after that `sudo pm2 restart jd-landing`.
* To start app from start, `sudo pm2 start npm --name "jd-landing" -- start`.
* Further more pm2 operations can be found from [here](https://pm2.io)

### Incidents

#### 2022/1/24 - Server down, was throwing 504 service unavailable bug...
##### Reason: Unknown...
##### Story:
* Incident happened and checked  the EC2 instance, and saw that instance was not working with *Insufficient data*, couldn't connect to the instance.
* Force stopped the instance and restarted it again.
* Connected to the instance and had to run all apps again.
* Checked `sudo pm2 list` and `jd-landing` was there, but status was just `error`.
* Ran `npm run build` inside the `projects/jd-landing-next` and restarted the server by using these [steps](#manual-deployment).
* Confirmed things are working by using the `sudo pm2 list` and checked using `curl` command also throw the browser.
* Of course started again `jd-landing` app which is Request Estimate, repository can be found from [here](https://github.com/jobhubgroup/jd-landing).

#### 2022/1/19 - Server experience slow down and some assets were not working...
##### Reason: Large bundle size of the jd-landing-next application
##### Story:
* Incident happened and couldn't find reason from the web, so connected to the instance.
* Nothing found from here, so tried to run `npm build` in the `jd-landing-next` folder.
* Build failed throws some not enough space error log was thrown.
* Checked the disk space, and it was fully occupied by the `.next` folder.
* Removed the `.next` folder using `rm -rf .next` command and ran the build command again.
* After the build success, just ran `sudo pm2 restart jd-landing-next`, and everything got recovered.

## Deploy on Vercel (Maybe for the staging server)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
