// <copyright file="ProjectsController.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Web.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Acme.Productivity.Pomodoro.Core;
    using Acme.Productivity.Pomodoro.Data;

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Controllers to manage all projects.
    /// </summary>
    [Authorize]
    [ApiController]
    public class ProjectsController : BaseAuthenticatedController
    {
        private readonly IProjectRepository projectRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="ProjectsController" /> class.
        /// </summary>
        /// <param name="projectRepository">The project repository.</param>
        public ProjectsController(IProjectRepository projectRepository)
        {
            this.projectRepository = projectRepository;
        }

        /// <summary>
        /// Create a new project.
        /// </summary>
        /// <param name="project">The information about the project.</param>
        /// <returns>Ok if success.</returns>
        [HttpPost]
        [Route("api/projects")]
        public ActionResult CreateProject(Project project)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }

            this.projectRepository.Add(this.UserId, project.Name);
            return this.NoContent();
        }

        /// <summary>
        /// Delete a project.
        /// </summary>
        /// <param name="projectId">The id of the project.</param>
        /// <returns>Ok if ok :).</returns>
        [HttpDelete]
        [Route("api/project/{projectId}")]
        public ActionResult Delete(Guid projectId)
        {
            this.projectRepository.Delete(this.UserId, projectId);
            return this.NoContent();
        }

        /// <summary>
        /// Get information about a project.
        /// </summary>
        /// <param name="projectId">The id of the project.</param>
        /// <returns>The project.</returns>
        [HttpGet]
        [Route("api/project/{projectId}")]
        public ActionResult<Project> Get(Guid projectId)
        {
            return this.projectRepository.Get(this.UserId, projectId);
        }

        /// <summary>
        /// Get all the projects.
        /// </summary>
        /// <returns>List of all projects associated to the current user.</returns>
        [HttpGet]
        [Route("api/projects")]
        public ActionResult<IEnumerable<Project>> GetAllProjects()
        {
            return this.projectRepository.GetAll(this.UserId);
        }

        /// <summary>
        /// Delete a project.
        /// </summary>
        /// <param name="projectId">The id of the project.</param>
        /// <param name="project">The information about the project.</param>
        /// <returns>Ok if ok :).</returns>
        [HttpPost]
        [Route("api/project/{projectId}")]
        public ActionResult Update(Guid projectId, Project project)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }

            this.projectRepository.Update(this.UserId, projectId, project.Name);
            return this.NoContent();
        }
    }
}